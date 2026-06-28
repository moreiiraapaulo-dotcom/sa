import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, DollarSign, ExternalLink, Percent, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandImage: string;
}

type TabType = 'affiliate' | 'coupons';

export default function DiscountModal({ isOpen, onClose, brandImage }: DiscountModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('affiliate');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
            className="relative w-full max-w-md overflow-hidden rounded-[32px] bg-neutral-900 text-white shadow-2xl border border-neutral-800"
          >
            {/* Header image/banner */}
            <div className="relative h-44 bg-neutral-800">
              <img
                src={brandImage}
                alt="Afiliação & Parcerias"
                className="h-full w-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-neutral-300 transition-colors hover:bg-black/60 hover:text-white"
                id="close-discount-modal"
              >
                <X className="h-4 w-4" />
              </button>
              
              <div className="absolute bottom-4 left-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-300 border border-amber-500/30">
                  <Sparkles className="h-3 w-3" /> Monetização
                </span>
                <h3 className="mt-1.5 text-2xl font-bold tracking-tight">Ganhe Comigo & Parcerias</h3>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-neutral-800 px-6 pt-3 bg-neutral-900">
              <button
                onClick={() => setActiveTab('affiliate')}
                className={`flex-1 pb-3 text-sm font-semibold tracking-wide border-b-2 transition-all ${
                  activeTab === 'affiliate'
                    ? 'border-amber-400 text-amber-400'
                    : 'border-transparent text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <DollarSign className="h-4 w-4" /> Ser Afiliado
                </span>
              </button>
              <button
                onClick={() => setActiveTab('coupons')}
                className={`flex-1 pb-3 text-sm font-semibold tracking-wide border-b-2 transition-all ${
                  activeTab === 'coupons'
                    ? 'border-amber-400 text-amber-400'
                    : 'border-transparent text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <Percent className="h-4 w-4" /> Meus Cupons
                </span>
              </button>
            </div>

            <div className="p-6 max-h-[420px] overflow-y-auto">
              {activeTab === 'affiliate' ? (
                <div className="space-y-5">
                  <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                    Quer faturar promovendo meus produtos? Inscreva-se como meu afiliado na Kiwify e ganhe uma excelente comissão de até <strong className="text-amber-300">50%</strong> sobre cada indicação bem-sucedida!
                  </p>

                  <div className="space-y-4">
                    {/* Item 1: Manual Glow up */}
                    <div className="rounded-2xl bg-neutral-800/80 p-4 border border-neutral-800 hover:border-neutral-700/60 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20 mb-1">
                            50% de Comissão
                          </span>
                          <h4 className="font-bold text-neutral-100 text-sm">Manual Glow up + Grupo</h4>
                          <p className="text-xs text-neutral-400 mt-1">
                            Ganhe aproximadamente <strong className="text-amber-300 font-semibold">R$ 14,95</strong> por venda indicada.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://kiwify.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-2 text-xs font-bold text-neutral-950 transition-all hover:bg-amber-400 active:scale-95"
                      >
                        <span>Solicitar Afiliação</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    {/* Item 2: Como mudei meu Corpo */}
                    <div className="rounded-2xl bg-neutral-800/80 p-4 border border-neutral-800 hover:border-neutral-700/60 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20 mb-1">
                            50% de Comissão
                          </span>
                          <h4 className="font-bold text-neutral-100 text-sm">Como mudei meu Corpo + Grupo</h4>
                          <p className="text-xs text-neutral-400 mt-1">
                            Ganhe aproximadamente <strong className="text-amber-300 font-semibold">R$ 48,50</strong> por venda indicada.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://kiwify.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-2 text-xs font-bold text-neutral-950 transition-all hover:bg-amber-400 active:scale-95"
                      >
                        <span>Solicitar Afiliação</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                    Aproveite meus cupons de desconto exclusivos e parcerias para economizar em roupas fitness e equipamentos de alta performance!
                  </p>

                  <div className="space-y-4">
                    {/* Brand 1: DFYNE Apparel */}
                    <div className="rounded-2xl bg-neutral-800/80 p-4 border border-neutral-800 hover:border-neutral-700/60 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-neutral-100 text-sm">DFYNE Apparel</h4>
                          <p className="text-xs text-emerald-400 font-medium mt-0.5">10% de Desconto Adicional</p>
                        </div>
                        <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-full px-2 py-0.5 font-semibold">
                          Roupa Fitness Premium
                        </span>
                      </div>
                      
                      <div className="mt-3 flex items-center justify-between gap-2 rounded-xl bg-neutral-900 p-2.5 border border-neutral-800">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-neutral-500 block">Cupom</span>
                          <span className="text-base font-mono font-bold text-amber-300 tracking-wider">MINI</span>
                        </div>
                        <button
                          onClick={() => copyCode('MINI')}
                          className="flex items-center gap-1 rounded-lg bg-neutral-800 px-3 py-1.5 text-xs font-semibold text-neutral-200 transition-all hover:bg-neutral-700 active:scale-95"
                        >
                          {copiedCode === 'MINI' ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span className="text-emerald-400">Copiado</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Copiar</span>
                            </>
                          )}
                        </button>
                      </div>

                      <a
                        href="https://dfyne.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-white py-2 text-xs font-bold text-neutral-950 transition-all hover:bg-neutral-100 active:scale-95"
                      >
                        <span>Visitar Loja Oficial</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    {/* Brand 2: Outros Cupons / Suporte */}
                    <div className="rounded-2xl bg-neutral-800/40 p-4 border border-neutral-800/60 text-center">
                      <Award className="h-5 w-5 text-amber-400/80 mx-auto mb-1.5" />
                      <h4 className="font-semibold text-neutral-200 text-xs">Novas marcas parceiras em breve!</h4>
                      <p className="text-[11px] text-neutral-500 mt-0.5">
                        Fique de olho nos meus stories e aqui no Linktree para novos cupons exclusivos de suplementos e looks.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
