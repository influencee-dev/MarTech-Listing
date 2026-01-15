
import React, { useState } from 'react';
import { martechService } from '../services/api';
// Fix: Import MartechTool to allow type casting for the submission payload
import { MartechTool } from '../types';

interface SubmitFormProps {
  onCancel: () => void;
}

const SubmitForm: React.FC<SubmitFormProps> = ({ onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'seo',
    short_pitch: '',
    software_description: '',
    pricing_model: '',
    pricing_starting_at: '',
    contact_email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Fix: Cast formData as Partial<MartechTool> because the local form state uses strings for fields 
      // that are strictly typed as unions in the main MartechTool interface (like pricing_model).
      const result = await martechService.submitTool(formData as Partial<MartechTool>);
      if (result.success) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please check your data and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (success) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center slide-up">
        <div className="w-24 h-24 bg-[#97a1f8] rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#97a1f8]/20 animate-bounce">
          <span className="text-4xl">🚀</span>
        </div>
        <h2 className="text-5xl font-black italic tracking-tighter mb-4">DOSSIER SUBMITTED</h2>
        <p className="text-slate-400 text-lg mb-12 uppercase tracking-widest font-bold">Verification In Progress</p>
        <button 
          onClick={onCancel}
          className="bg-[#1e1b4b] text-[#97a1f8] px-12 py-4 rounded-2xl font-black italic border border-[#97a1f8]/20 hover:bg-[#97a1f8] hover:text-[#0f172a] transition-all"
        >
          RETURN TO DASHBOARD
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 slide-up">
      <div className="mb-12">
        <h1 className="text-5xl font-black italic tracking-tighter uppercase">Submit New Asset</h1>
        <p className="text-slate-500 mt-2">Enter the technical specifications for the Martech Hub analysis.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 glass rounded-[3.5rem] p-12 border border-[#97a1f8]/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Software Name</label>
            <input 
              required 
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text" 
              className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all" 
              placeholder="e.g. Acme Analytics" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Category</label>
            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all appearance-none"
            >
              <option value="seo">SEO & Content</option>
              <option value="ai">AI & Automation</option>
              <option value="crm">CRM & Sales</option>
              <option value="social">Social Media</option>
              <option value="analytics">Analytics</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Short Pitch</label>
          <input 
            required 
            name="short_pitch"
            value={formData.short_pitch}
            onChange={handleChange}
            type="text" 
            className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all" 
            placeholder="One sentence summarizing the unique value prop." 
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Deep Analysis (Description)</label>
          <textarea 
            required 
            name="software_description"
            value={formData.software_description}
            onChange={handleChange}
            rows={5} 
            className="w-full bg-[#0f172a] border border-slate-800 rounded-[2rem] px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all resize-none" 
            placeholder="Detailed breakdown of functionality, architecture, and core benefits..." 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Pricing Model</label>
            <input 
              required 
              name="pricing_model"
              value={formData.pricing_model}
              onChange={handleChange}
              type="text" 
              className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all" 
              placeholder="e.g. Freemium" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Starting Price</label>
            <input 
              required 
              name="pricing_starting_at"
              value={formData.pricing_starting_at}
              onChange={handleChange}
              type="text" 
              className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all" 
              placeholder="e.g. $49/mo" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Contact Email</label>
            <input 
              required 
              name="contact_email"
              value={formData.contact_email}
              onChange={handleChange}
              type="email" 
              className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all" 
              placeholder="sales@tool.com" 
            />
          </div>
        </div>

        <div className="flex gap-4 pt-8">
          <button 
            type="submit" 
            disabled={loading}
            className="flex-1 bg-[#97a1f8] text-[#0f172a] font-black italic py-5 rounded-3xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 disabled:opacity-50 neon-shadow"
          >
            {loading ? (
              <span className="w-6 h-6 border-2 border-[#0f172a]/20 border-t-[#0f172a] rounded-full animate-spin"></span>
            ) : 'SUBMIT FOR ANALYSIS'}
          </button>
          <button 
            type="button" 
            onClick={onCancel}
            className="px-10 bg-[#1e1b4b] text-slate-400 font-black italic rounded-3xl hover:text-white transition-colors"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
