import React, { useState } from 'react';
import { X, ShieldCheck, Check, AlertTriangle, ShieldAlert, Sparkles, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterModalsProps {
  isOpen: boolean;
  type: 'cookie' | 'report' | 'privacy' | 'more' | null;
  onClose: () => void;
}

export default function FooterModals({ isOpen, type, onClose }: FooterModalsProps) {
  // Cookie states
  const [cookies, setCookies] = useState({ essential: true, analytics: true, marketing: false });
  const [cookieSaved, setCookieSaved] = useState(false);

  // Report states
  const [reportCategory, setReportCategory] = useState('spam');
  const [reportText, setReportText] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const saveCookies = () => {
    setCookieSaved(true);
    setTimeout(() => {
      setCookieSaved(false);
      onClose();
    }, 1500);
  };

  const submitReport = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
    setTimeout(() => {
      setReportSubmitted(false);
      setReportText('');
      onClose();
    }, 2000);
  };

  const renderContent = () => {
    switch (type) {
      case 'cookie':
        return (
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-6 w-6 text-pink-500" />
              <h3 className="text-lg font-bold text-neutral-900">Preferências de Cookies</h3>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed mb-4">
              Nós usamos cookies e ferramentas similares para fornecer e melhorar nossos serviços. Personalize suas opções abaixo:
            </p>

            <div className="space-y-3.5 mb-6">
              <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                <div>
                  <h4 className="text-xs font-bold text-neutral-800">Cookies Essenciais</h4>
                  <p className="text-[10px] text-neutral-400">Necessários para o funcionamento básico do site.</p>
                </div>
                <div className="h-5 w-9 rounded-full bg-pink-500 flex items-center justify-end p-0.5 cursor-not-allowed opacity-80">
                  <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                <div>
                  <h4 className="text-xs font-bold text-neutral-800">Cookies de Análise</h4>
                  <p className="text-[10px] text-neutral-400">Ajudam-nos a entender como os visitantes interagem com o site.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setCookies(c => ({ ...c, analytics: !c.analytics }))}
                  className={`h-5 w-9 rounded-full transition-colors flex items-center p-0.5 ${cookies.analytics ? 'bg-pink-500 justify-end' : 'bg-neutral-300 justify-start'}`}
                >
                  <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                <div>
                  <h4 className="text-xs font-bold text-neutral-800">Cookies de Marketing</h4>
                  <p className="text-[10px] text-neutral-400">Usados para exibir anúncios direcionados de acordo com seus interesses.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setCookies(c => ({ ...c, marketing: !c.marketing }))}
                  className={`h-5 w-9 rounded-full transition-colors flex items-center p-0.5 ${cookies.marketing ? 'bg-pink-500 justify-end' : 'bg-neutral-300 justify-start'}`}
                >
                  <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
                </button>
              </div>
            </div>

            <button
              onClick={saveCookies}
              className="w-full py-2.5 bg-neutral-900 text-white font-bold text-xs rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5"
            >
              {cookieSaved ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Salvo com Sucesso!</span>
                </>
              ) : (
                <span>Salvar Configurações</span>
              )}
            </button>
          </div>
        );

      case 'report':
        return (
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="h-6 w-6 text-amber-500" />
              <h3 className="text-lg font-bold text-neutral-900">Denunciar Perfil</h3>
            </div>
            
            {reportSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-neutral-900">Denúncia Recebida</h4>
                <p className="text-xs text-neutral-500 max-w-xs mt-1">
                  Agradecemos seu feedback. Nossa equipe revisará este perfil de acordo com nossos Termos de Serviço.
                </p>
              </div>
            ) : (
              <form onSubmit={submitReport} className="space-y-4">
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Se você acredita que este perfil viola as diretrizes de comunidade do Linktree, relate os detalhes abaixo para que possamos analisar.
                </p>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">Motivo da Denúncia</label>
                  <select
                    value={reportCategory}
                    onChange={e => setReportCategory(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-500"
                  >
                    <option value="spam">Spam ou links maliciosos</option>
                    <option value="impersonation">Falsificação de identidade</option>
                    <option value="inappropriate">Conteúdo impróprio ou ofensivo</option>
                    <option value="other">Outro motivo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">Informações Adicionais (Opcional)</label>
                  <textarea
                    rows={3}
                    value={reportText}
                    onChange={e => setReportText(e.target.value)}
                    placeholder="Descreva brevemente o problema encontrado..."
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-2.5 bg-neutral-100 text-neutral-700 font-bold text-xs rounded-xl hover:bg-neutral-200 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-amber-500 text-neutral-950 font-bold text-xs rounded-xl hover:bg-amber-400 transition-colors"
                  >
                    Enviar Denúncia
                  </button>
                </div>
              </form>
            )}
          </div>
        );

      case 'privacy':
        return (
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-6 w-6 text-pink-500" />
              <h3 className="text-lg font-bold text-neutral-900">Política de Privacidade</h3>
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1 text-xs text-neutral-600 leading-relaxed">
              <p>
                <strong>Última atualização: Junho de 2026</strong>
              </p>
              <p>
                O Linktree respeita sua privacidade e tem o compromisso de proteger as informações pessoais que você compartilha conosco. Esta página é uma réplica interativa com fins de demonstração visual e de portfólio.
              </p>
              <p>
                <strong>1. Coleta de Informações:</strong> Nesta réplica, nenhum dado pessoal, cookies persistentes ou localizações são coletados ou transmitidos de fato para servidores de rastreamento. Quaisquer dados inseridos nos formulários de mentoria ou de denúncia de perfil são processados puramente em memória (no cliente) e são resetados ao atualizar a página.
              </p>
              <p>
                <strong>2. Cookies:</strong> Os cookies gerenciados pelo modal de Preferências de Cookies são salvos temporariamente na sessão local da sua navegação e destinam-se exclusivamente a simular a resposta de consentimento exigida pelas regulamentações gerais de privacidade de dados (LGPD / GDPR).
              </p>
              <p>
                <strong>3. Segurança:</strong> Adotamos as melhores práticas de desenvolvimento para garantir que todos os scripts rodem em ambiente seguro e sandboxed, sem exposição de tokens sensíveis ou chaves de desenvolvimento ao cliente final.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full mt-5 py-2.5 bg-neutral-900 text-white font-bold text-xs rounded-xl hover:bg-neutral-800 transition-colors"
            >
              Entendido
            </button>
          </div>
        );

      case 'more':
        return (
          <div className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center mb-3">
                <PlusCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Crie o seu próprio Linktree!</h3>
              <p className="text-xs text-neutral-500 max-w-xs mt-1 leading-relaxed">
                Junte-se a mais de 40 milhões de criadores de conteúdo que conectam suas audiências através de um único link inteligente.
              </p>
            </div>

            <div className="my-6 p-4 rounded-2xl bg-pink-50/50 border border-pink-100 space-y-2 text-xs text-neutral-700">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-pink-500 shrink-0" />
                <span>Links ilimitados e totalmente personalizáveis</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-pink-500 shrink-0" />
                <span>Análises detalhadas de cliques e visualizações</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-pink-500 shrink-0" />
                <span>Integração nativa com redes sociais e pagamentos</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://linktr.ee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-pink-500 hover:bg-pink-600 font-bold text-xs rounded-xl text-white transition-all shadow-sm active:scale-98"
              >
                Começar Gratuitamente
              </a>
              <button
                onClick={onClose}
                className="w-full text-center py-2.5 bg-neutral-100 hover:bg-neutral-200 font-bold text-xs rounded-xl text-neutral-600"
              >
                Fechar
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && type && (
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
            className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl border border-neutral-100"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-800"
            >
              <X className="h-4 w-4" />
            </button>

            {renderContent()}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
