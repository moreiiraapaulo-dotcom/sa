import React, { useState } from 'react';
import { X, Heart, MessageCircle, Instagram, Grid, Bookmark, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InstagramModalProps {
  isOpen: boolean;
  onClose: () => void;
  instaImage: string;
}

export default function InstagramModal({ isOpen, onClose, instaImage }: InstagramModalProps) {
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  const posts = [
    {
      id: 'p1',
      image: instaImage,
      likes: '4,830',
      comments: '184',
      caption: 'Consistency is the magic formula. No shortcuts, just pure dedication. New training program dropping next week! 💪✨ #fitnessjourney #consistency'
    },
    {
      id: 'p2',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
      likes: '3,211',
      comments: '95',
      caption: 'Sunday thoughts: Rest is just as important as the work you put in. Listen to your body, recharge, and come back stronger on Monday. 🧘‍♀️🔋'
    },
    {
      id: 'p3',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&auto=format&fit=crop&q=80',
      likes: '8,490',
      comments: '342',
      caption: 'My absolute go-to pre-workout meal! Fast digesting carbs + high-quality protein to power through leg day. Recipe in my story! 🥑🥗🍞'
    },
    {
      id: 'p4',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
      likes: '5,102',
      comments: '110',
      caption: 'Grateful for this community we are building together. Thank you for showing up for yourselves every single day. Let’s finish the month strong! ✨❤️'
    },
    {
      id: 'p5',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80',
      likes: '6,215',
      comments: '143',
      caption: 'Chasing sunsets and personal records. There is nothing like an outdoor sweat session to reset your energy. 🌅🏃‍♀️'
    },
    {
      id: 'p6',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=80',
      likes: '7,110',
      comments: '198',
      caption: 'DFYNE Core collection try-on! This shade is everything. Which of these styles are you grabbing with code MINI? 👇💚'
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
            className="relative w-full max-w-lg overflow-y-auto max-h-[90vh] rounded-3xl bg-white text-neutral-950 shadow-2xl border border-neutral-100"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white px-6 py-4 border-b border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">Instagram Feed</h3>
                  <p className="text-[10px] text-neutral-500 font-medium">@samyramoreira no Instagram</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Profile Header Stats */}
            <div className="p-6 border-b border-neutral-100 bg-neutral-50/50">
              <div className="flex items-center gap-4">
                <img
                  src={posts[0].image}
                  alt="Samyra Moreira"
                  className="h-16 w-16 rounded-full object-cover border-2 border-neutral-200 p-0.5"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-neutral-900">samyramoreira</span>
                    <span className="inline-flex items-center gap-0.5 rounded bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold text-blue-600 border border-blue-100">
                      <Award className="h-2.5 w-2.5" /> Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-xs text-neutral-600 font-medium">
                    <span><strong>124</strong> posts</span>
                    <span><strong>45.2K</strong> seguidores</span>
                    <span><strong>850</strong> seguindo</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                🌸 Atleta & Mentora Fitness<br />
                💪 Ajudando mulheres a construírem força e confiança<br />
                ⚡️ Cupom: <strong>MINI</strong> para 10% off na DFYNE
              </p>
            </div>

            {/* Grid Tabs */}
            <div className="flex justify-around border-b border-neutral-100 text-neutral-400 py-2.5 text-xs font-semibold">
              <button className="flex items-center gap-1.5 text-pink-600">
                <Grid className="h-4 w-4" />
                <span>POSTS</span>
              </button>
              <button className="flex items-center gap-1.5 hover:text-neutral-600">
                <Bookmark className="h-4 w-4" />
                <span>SALVOS</span>
              </button>
            </div>

            {/* Grid of Posts */}
            <div className="p-4 grid grid-cols-3 gap-2 bg-white">
              {posts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="relative aspect-square overflow-hidden bg-neutral-100 group rounded-xl"
                >
                  <img
                    src={post.image}
                    alt="Instagram Post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover stats overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white text-xs font-bold font-sans">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4 fill-white" />
                      <span>{post.likes.split(',')[0]}K</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4 fill-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Dedicated Post Detail View (Overlay inside) */}
            <AnimatePresence>
              {selectedPost && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute inset-x-0 bottom-0 top-[60px] bg-white z-20 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={posts[0].image}
                          alt="Samyra"
                          className="h-8 w-8 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="font-bold text-xs text-neutral-900">samyramoreira</span>
                      </div>
                      <button
                        onClick={() => setSelectedPost(null)}
                        className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:bg-neutral-200 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="aspect-square w-full rounded-2xl overflow-hidden bg-neutral-100 shadow-sm border border-neutral-100">
                      <img
                        src={selectedPost.image}
                        alt="Selected post detail"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-neutral-700">
                      <button className="flex items-center gap-1 text-xs font-semibold hover:text-pink-600">
                        <Heart className="h-4.5 w-4.5" />
                        <span>{selectedPost.likes} curtidas</span>
                      </button>
                      <button className="flex items-center gap-1 text-xs font-semibold">
                        <MessageCircle className="h-4.5 w-4.5" />
                        <span>{selectedPost.comments} comentários</span>
                      </button>
                    </div>

                    <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                      <strong>samyramoreira</strong> {selectedPost.caption}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedPost(null)}
                    className="w-full text-center py-2.5 bg-neutral-100 hover:bg-neutral-200 font-bold text-xs rounded-xl text-neutral-700 mt-6"
                  >
                    Voltar para o feed
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
