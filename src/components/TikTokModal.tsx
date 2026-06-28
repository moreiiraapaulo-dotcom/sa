import React, { useState } from 'react';
import { X, Heart, MessageCircle, Play, Users, Eye, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TikTokModalProps {
  isOpen: boolean;
  onClose: () => void;
  tiktokImage: string;
}

export default function TikTokModal({ isOpen, onClose, tiktokImage }: TikTokModalProps) {
  const [likes, setLikes] = useState<Record<string, number>>({
    vid1: 15400,
    vid2: 8900,
    vid3: 31200,
    vid4: 5100
  });
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const handleLike = (id: string) => {
    setLiked(prev => {
      const active = !prev[id];
      setLikes(l => ({ ...l, [id]: l[id] + (active ? 1 : -1) }));
      return { ...prev, [id]: active };
    });
  };

  const videos = [
    {
      id: 'vid1',
      views: '124.5K',
      title: 'Rotina matinal saudável de domingo ✨🧘‍♀️ #fitroutine #wellness',
      image: tiktokImage,
      music: 'Som original - Samyra'
    },
    {
      id: 'vid2',
      views: '78.2K',
      title: 'Melhores exercícios para glúteos e pernas! Salve este post 💪🍑 #gymtok',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=60',
      music: 'Lofi Aesthetic - Chill Beats'
    },
    {
      id: 'vid3',
      views: '340.1K',
      title: 'Provador de looks fitness novos da DFYNE 😍 Qual o seu favorito?',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&auto=format&fit=crop&q=60',
      music: 'Upbeat Summer Pop'
    },
    {
      id: 'vid4',
      views: '45.9K',
      title: 'Minha salada de proteína pós-treino favorita 🥗🥑 #healthyeats',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop&q=60',
      music: 'Acoustic Folk - Soft Morning'
    }
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
            className="relative w-full max-w-lg overflow-y-auto max-h-[90vh] rounded-3xl bg-neutral-950 text-white shadow-2xl border border-neutral-800"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-neutral-900 px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black font-black">
                  𝅘𝅥𝅯
                </div>
                <div>
                  <h3 className="font-bold">TikTok Feed</h3>
                  <p className="text-[10px] text-neutral-400 font-medium">@dommooree05 no TikTok</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Profile Statistics Panel */}
            <div className="bg-neutral-900/60 p-6 flex flex-col items-center border-b border-neutral-900">
              <div className="flex items-center gap-8 justify-center text-center">
                <div>
                  <div className="text-xl font-bold">128.4K</div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Seguidores</div>
                </div>
                <div className="h-8 w-px bg-neutral-800" />
                <div>
                  <div className="text-xl font-bold">1.2M</div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Curtidas</div>
                </div>
                <div className="h-8 w-px bg-neutral-800" />
                <div>
                  <div className="text-xl font-bold flex items-center justify-center gap-1">
                    <Users className="h-4 w-4 text-emerald-400" />
                    <span>Active</span>
                  </div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Status</div>
                </div>
              </div>
            </div>

            {/* Videos Grid */}
            <div className="p-6 grid gap-4 sm:grid-cols-2">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 flex flex-col group hover:border-neutral-700 transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950">
                    <img
                      src={vid.image}
                      alt={vid.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Play className="h-6 w-6 fill-white text-white" />
                      </div>
                    </div>

                    {/* View Count Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1 rounded-lg bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                      <Eye className="h-3 w-3 text-neutral-300" />
                      <span>{vid.views}</span>
                    </div>

                    {/* Action buttons (Right-aligned in overlay) */}
                    <div className="absolute bottom-3 right-3 flex flex-col gap-2.5 z-10">
                      <button
                        onClick={() => handleLike(vid.id)}
                        className="flex flex-col items-center gap-0.5 text-white bg-black/45 backdrop-blur-md p-1.5 rounded-full hover:scale-110 active:scale-90 transition-all"
                      >
                        <Heart
                          className={`h-4.5 w-4.5 transition-colors ${
                            liked[vid.id] ? 'fill-pink-500 text-pink-500' : 'text-white'
                          }`}
                        />
                        <span className="text-[9px] font-semibold">
                          {(likes[vid.id] / 1000).toFixed(1)}K
                        </span>
                      </button>
                      <div className="flex flex-col items-center gap-0.5 text-white bg-black/45 backdrop-blur-md p-1.5 rounded-full">
                        <MessageCircle className="h-4.5 w-4.5 text-white" />
                        <span className="text-[9px] font-semibold">{(likes[vid.id] / 2400).toFixed(1)}K</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 flex flex-col justify-between flex-grow">
                    <p className="text-xs text-neutral-200 line-clamp-2 leading-snug mb-2">
                      {vid.title}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 border-t border-neutral-800/80 pt-2">
                      <Music className="h-3 w-3 text-pink-500 shrink-0" />
                      <span className="truncate">{vid.music}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
