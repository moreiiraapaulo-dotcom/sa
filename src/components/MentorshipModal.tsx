import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Star, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MentorshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentorImage: string;
}

export default function MentorshipModal({ isOpen, onClose, mentorImage }: MentorshipModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', goal: 'fitness', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', goal: 'fitness', message: '' });
      onClose();
    }, 3000);
  };

  const features = [
    'Plano de treino 100% individualizado',
    'Acompanhamento nutricional focado em performance',
    'Feedback semanal de progresso por videochamada',
    'Acesso prioritário via WhatsApp direto com Samyra',
    'Ajustes mensais conforme sua evolução física',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Content */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            className="relative w-full max-w-lg overflow-y-auto max-h-[90vh] rounded-3xl bg-white text-neutral-800 shadow-2xl border border-neutral-100"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-800"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header profile info */}
            <div className="bg-gradient-to-br from-pink-50 to-neutral-50 p-6 pt-10 border-b border-neutral-100 flex flex-col items-center text-center">
              <div className="relative">
                <img
                  src={mentorImage}
                  alt="Samyra Moreira"
                  className="h-20 w-20 rounded-full object-cover border-4 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-white shadow">
                  <Star className="h-3 w-3 fill-white" />
                </div>
              </div>
              <h3 className="mt-3 text-xl font-bold text-neutral-900">Mentoria Individual</h3>
              <p className="text-xs font-semibold text-pink-600 tracking-wider uppercase mt-1">Vagas Limitadas • Samyra Moreira</p>
              <p className="mt-2 text-sm text-neutral-600 max-w-sm">
                Transforme seu corpo e sua mente com um plano sob medida de nutrição e treinamento exclusivo.
              </p>
            </div>

            <div className="p-6">
              {/* Features section */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-pink-500" /> O que está incluso na mentoria:
                </h4>
                <div className="grid gap-2.5">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="rounded-2xl bg-neutral-50 p-5 border border-neutral-100">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h5 className="font-bold text-neutral-900">Solicitação Enviada!</h5>
                    <p className="text-xs text-neutral-500 max-w-xs mt-1">
                      A Samyra ou a equipe entrará em contato com você nas próximas 24 horas via e-mail.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h4 className="font-bold text-sm text-neutral-800 flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-neutral-500" /> Candidate-se para uma vaga
                    </h4>
                    
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">Nome Completo</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ex: Ana Silva"
                          className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">Seu Melhor E-mail</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Ex: ana@exemplo.com"
                          className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">Principal Objetivo</label>
                      <select
                        value={formData.goal}
                        onChange={e => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                      >
                        <option value="fitness">Emagrecimento & Definição</option>
                        <option value="muscle">Ganho de Massa Muscular</option>
                        <option value="health">Hábitos Saudáveis & Nutrição</option>
                        <option value="coaching">Mentoria Mental & Rotina</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">Fale um pouco sobre você</label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Quais são as suas maiores dificuldades atualmente?"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-pink-500 py-2.5 font-bold text-white transition-all hover:bg-pink-600 active:scale-98"
                    >
                      <span>Enviar Candidatura</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
