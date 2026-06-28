import React from 'react';
import { X, Heart, Flame, Shield, Award, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileImage: string;
}

export default function InfoModal({ isOpen, onClose, profileImage }: InfoModalProps) {
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
            className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-neutral-900 text-white shadow-2xl border border-neutral-800 p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center text-center mt-2">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Samyra Moreira"
                  className="h-16 w-16 rounded-full object-cover border-2 border-amber-400"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-neutral-950">
                  <Flame className="h-3 w-3 fill-current" />
                </div>
              </div>

              <h3 className="font-bold text-lg mt-3">Samyra Moreira</h3>
              <p className="text-xs text-neutral-400">Atleta & Mentora Fitness</p>

              <div className="mt-4 border-t border-b border-neutral-800 py-3 w-full text-left space-y-3">
                <div className="flex items-start gap-2.5">
                  <Shield className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-200">Missão da Mentoria</h4>
                    <p className="text-[11px] text-neutral-400 leading-normal">
                      Capacitar mulheres a conquistarem seus objetivos físicos e mentais de forma sustentável e saudável.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Award className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-200">Parceira Oficial DFYNE</h4>
                    <p className="text-[11px] text-neutral-400 leading-normal">
                      Representando a melhor marca de roupas de ginástica do mundo. Ganhe 10% de desconto usando o cupom **MINI** no checkout.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Heart className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-200">Estilo de Vida</h4>
                    <p className="text-[11px] text-neutral-400 leading-normal">
                      Defensora de uma rotina matinal produtiva, nutrição baseada em alimentos reais e musculação consistente.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-400 py-2.5 text-xs font-bold text-neutral-950 transition-all hover:bg-amber-300 active:scale-98"
              >
                <Sparkles className="h-4 w-4" />
                <span>Let's Grow Together</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
