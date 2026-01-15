
import React, { useState } from 'react';

interface SubmitFormProps {
  onCancel: () => void;
}

const SubmitForm: React.FC<SubmitFormProps> = ({ onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center slide-up">
        <div className="w-24 h-24 bg-[#97a1f8] rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#97a1f8]/20">
          <span className="text-4xl">🚀</span>
        </div>
        <h2 className="text-5xl font-black italic tracking-tighter mb-4">DOSSIER SUBMITTED</h2>
        <p className="text-slate-400 text-lg mb-12">Our editorial team will analyze your tool and update the directory within 48 hours.</p>
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
            <input required type="text" className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all" placeholder="e.g. Acme Analytics" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Category</label>
            <select className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all appearance-none">
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
          <input required type="text" className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all" placeholder="One sentence summarizing the unique value prop." />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Deep Analysis (Description)</label>
          <textarea required rows={5} className="w-full bg-[#0f172a] border border-slate-800 rounded-[2rem] px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all resize-none" placeholder="Detailed breakdown of functionality, architecture, and core benefits..." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Pricing Model</label>
            <input required type="text" className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all" placeholder="e.g. Freemium" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Starting Price</label>
            <input required type="text" className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all" placeholder="e.g. $49/mo" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-black tracking-[0.2em] text-[#97a1f8] ml-2">Contact Email</label>
            <input required type="email" className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all" placeholder="sales@tool.com" />
          </div>
        </div>

        <div className="flex gap-4 pt-8">
          <button 
            type="submit" 
            disabled={loading}
            className="flex-1 bg-[#97a1f8] text-[#0f172a] font-black italic py-5 rounded-3xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {loading ? 'PROCESSING...' : 'SUBMIT FOR ANALYSIS'}
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
