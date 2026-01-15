import React, { useState } from 'react';
import { martechService } from '../services/api';
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
      const result = await martechService.submitTool(formData as Partial<MartechTool>);
      if (result.success) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Invio fallito:", error);
      alert("Qualcosa è andato storto. Controlla i dati e riprova.");
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
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center slide-up">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#97a1f8] rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#97a1f8]/20 animate-bounce">
          <span className="text-3xl md:text-4xl">🚀</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 uppercase">Dossier Inviato</h2>
        <p className="text-slate-400 text-base md:text-lg mb-12 uppercase tracking-widest font-bold">Verifica Tecnica in Corso</p>
        <button 
          onClick={onCancel}
          className="w-full md:w-auto bg-[#1e1b4b] text-[#97a1f8] px-12 py-5 rounded-2xl font-black italic border border-[#97a1f8]/20 hover:bg-[#97a1f8] hover:text-[#0f172a] transition-all shadow-lg"
        >
          TORNA ALLA DASHBOARD
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20 slide-up">
      <div className="mb-10 md:mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-3">Invia Asset</h1>
        <p className="text-slate-500 font-medium">Inserisci le specifiche tecniche per l'analisi del Hub.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 ios-glass rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-12 border border-[#97a1f8]/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-[0.2em] text-indigo-700 dark:text-[#97a1f8] ml-2">Nome Software</label>
            <input 
              required 
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text" 
              className="w-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all text-slate-900 dark:text-white" 
              placeholder="Esempio Analytics" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-[0.2em] text-indigo-700 dark:text-[#97a1f8] ml-2">Categoria</label>
            <div className="relative">
              <select 
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all appearance-none text-slate-900 dark:text-white"
              >
                <option value="seo">SEO & Content</option>
                <option value="ai">AI & Automation</option>
                <option value="crm">CRM & Sales</option>
                <option value="social">Social Media</option>
                <option value="analytics">Analytics</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-bold">↓</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black tracking-[0.2em] text-indigo-700 dark:text-[#97a1f8] ml-2">Breve Presentazione (Pitch)</label>
          <input 
            required 
            name="short_pitch"
            value={formData.short_pitch}
            onChange={handleChange}
            type="text" 
            className="w-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all text-slate-900 dark:text-white" 
            placeholder="La proposta di valore unica in una sola frase." 
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black tracking-[0.2em] text-indigo-700 dark:text-[#97a1f8] ml-2">Analisi Approfondita</label>
          <textarea 
            required 
            name="software_description"
            value={formData.software_description}
            onChange={handleChange}
            rows={5} 
            className="w-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-[2rem] px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all resize-none text-slate-900 dark:text-white" 
            placeholder="Dettagli su funzionalità, architettura e benefici..." 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-[0.2em] text-indigo-700 dark:text-[#97a1f8] ml-2">Modello di Prezzo</label>
            <input 
              required 
              name="pricing_model"
              value={formData.pricing_model}
              onChange={handleChange}
              type="text" 
              className="w-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all text-slate-900 dark:text-white" 
              placeholder="es. Freemium" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-[0.2em] text-indigo-700 dark:text-[#97a1f8] ml-2">Prezzo di Partenza</label>
            <input 
              required 
              name="pricing_starting_at"
              value={formData.pricing_starting_at}
              onChange={handleChange}
              type="text" 
              className="w-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all text-slate-900 dark:text-white" 
              placeholder="es. $49/mese" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-[0.2em] text-indigo-700 dark:text-[#97a1f8] ml-2">Email di Contatto</label>
            <input 
              required 
              name="contact_email"
              value={formData.contact_email}
              onChange={handleChange}
              type="email" 
              className="w-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#97a1f8] transition-all text-slate-900 dark:text-white" 
              placeholder="sales@tool.com" 
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-6 md:pt-8">
          <button 
            type="submit" 
            disabled={loading}
            className="w-full md:flex-1 bg-indigo-600 dark:bg-lavender text-white dark:text-deepIndigo font-black italic py-5 rounded-2xl md:rounded-3xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl"
          >
            {loading ? (
              <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
            ) : 'INVIA PER L\'ANALISI'}
          </button>
          <button 
            type="button" 
            onClick={onCancel}
            className="w-full md:px-10 py-5 bg-slate-100 dark:bg-[#1e1b4b] text-slate-600 dark:text-slate-400 font-black italic rounded-2xl md:rounded-3xl hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            ANNULLA
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;