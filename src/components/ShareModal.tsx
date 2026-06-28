import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Share2, MessageCircle, Facebook, Sparkles, Download, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import QRCode from 'qrcode';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileUrl: string;
}

export default function ShareModal({ isOpen, onClose, profileUrl }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [showInstaTip, setShowInstaTip] = useState(false);

  // Generate dynamic QR Code for the specific profileUrl
  useEffect(() => {
    if (profileUrl && isOpen) {
      QRCode.toDataURL(profileUrl, {
        margin: 2,
        width: 300,
        color: {
          dark: '#171717', // neutral-900
          light: '#ffffff', // white
        },
      })
        .then((url) => {
          setQrCodeUrl(url);
        })
        .catch((err) => {
          console.error('Erro ao gerar QR Code:', err);
        });
    }
  }, [profileUrl, isOpen]);

  const copyUrl = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = "Confira o Linktree de Samyra Moreira! 💪✨";

  const handleInstagramClick = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setShowInstaTip(true);
    setTimeout(() => setCopied(false), 2000);
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
            onClick={() => {
              setShowInstaTip(false);
              onClose();
            }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Content */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            className="relative w-full max-w-sm overflow-hidden rounded-[32px] bg-white text-neutral-800 shadow-2xl border border-neutral-100 p-6"
          >
            <button
              onClick={() => {
                setShowInstaTip(false);
                onClose();
              }}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-800 z-10"
              id="close-share-modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-pink-500 mb-3">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-neutral-900 text-lg">Compartilhar Perfil</h3>
              <p className="text-xs text-neutral-500 mt-1 max-w-xs">
                Compartilhe o Linktree de Samyra Moreira ou use o QR Code abaixo.
              </p>
            </div>

            {/* QR Code Container */}
            <div className="mt-5 flex flex-col items-center justify-center p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
              <div className="bg-white p-2.5 rounded-xl border border-neutral-200/60 shadow-sm relative overflow-hidden flex items-center justify-center w-36 h-36">
                {qrCodeUrl ? (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={qrCodeUrl}
                    alt="Samyra Moreira QR Code"
                    className="h-32 w-32 object-contain"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />
                )}
              </div>
              
              {qrCodeUrl && (
                <a
                  href={qrCodeUrl}
                  download="samyra_moreira_linktree_qr.png"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100/80 px-4 py-2 rounded-xl transition-all border border-pink-100/60 shadow-sm active:scale-95"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Baixar QR Code</span>
                </a>
              )}
              
              <span className="text-[10px] font-bold text-neutral-400 mt-2.5 tracking-wider uppercase flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-pink-500" /> Escaneie para abrir o site
              </span>
            </div>

            {/* Copy Field */}
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-2.5">
              <span className="text-xs text-neutral-500 font-semibold truncate flex-grow pl-1.5">{profileUrl}</span>
              <button
                onClick={copyUrl}
                className="flex h-8 items-center gap-1 rounded-lg bg-pink-500 px-3 font-semibold text-white text-xs hover:bg-pink-600 active:scale-95 transition-all shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Sharing buttons */}
            <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs font-semibold text-neutral-600">
              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + profileUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <span className="text-[10px]">WhatsApp</span>
              </a>

              {/* Instagram */}
              <button
                onClick={handleInstagramClick}
                className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-pink-600">
                  <Instagram className="h-5 w-5" />
                </div>
                <span className="text-[10px]">Instagram</span>
              </button>

              {/* X */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(profileUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white animate-none">
                  <span className="font-bold text-sm select-none">𝕏</span>
                </div>
                <span className="text-[10px]">X</span>
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Facebook className="h-5 w-5" />
                </div>
                <span className="text-[10px]">Facebook</span>
              </a>
            </div>

            {/* Custom Interactive Instagram & Share Instructions */}
            <AnimatePresence>
              {showInstaTip && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 bg-pink-50/50 rounded-2xl p-4 border border-pink-100 text-left"
                >
                  <div className="flex items-center gap-1.5 text-pink-700 font-bold text-xs mb-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Como postar no Instagram:</span>
                  </div>
                  <ol className="text-[11px] text-neutral-600 space-y-1 list-decimal pl-3.5 leading-relaxed font-medium">
                    <li>
                      O link do seu site já foi <strong className="text-pink-600">copiado</strong> automaticamente!
                    </li>
                    <li>
                      Acesse o <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline font-bold">Instagram</a> e cole na sua <strong>Bio</strong>.
                    </li>
                    <li>
                      Baixe o seu <strong>QR Code</strong> acima e adicione-o como imagem ou adesivo nos seus <strong>Stories</strong>.
                    </li>
                  </ol>
                  <button
                    onClick={() => setShowInstaTip(false)}
                    className="mt-2.5 w-full bg-white hover:bg-pink-100 text-pink-600 border border-pink-100 py-1.5 rounded-lg text-[10px] font-bold transition-all active:scale-95 text-center cursor-pointer"
                  >
                    Entendido!
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
