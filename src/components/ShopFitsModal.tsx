import React, { useState } from 'react';
import { X, ExternalLink, ShoppingBag, Heart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShopFitsModalProps {
  isOpen: boolean;
  onClose: () => void;
  shopImage: string;
}

export default function ShopFitsModal({ isOpen, onClose, shopImage }: ShopFitsModalProps) {
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const outfits = [
    {
      id: 'fit1',
      title: 'Seamless Ribbed Crop Top & Short Set',
      price: '$58.00',
      brand: 'DFYNE',
      rating: '4.9 (124 reviews)',
      image: shopImage,
      link: 'https://dfyne.com'
    },
    {
      id: 'fit2',
      title: 'Impact High-Waisted Gym Shorts - Olive',
      price: '$34.00',
      brand: 'DFYNE',
      rating: '4.8 (89 reviews)',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=60',
      link: 'https://dfyne.com'
    },
    {
      id: 'fit3',
      title: 'Dynamic Seamless Sports Bra - Sage Green',
      price: '$28.00',
      brand: 'DFYNE',
      rating: '4.9 (212 reviews)',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&auto=format&fit=crop&q=60',
      link: 'https://dfyne.com'
    },
    {
      id: 'fit4',
      title: 'Performance Gym Socks (3-Pack)',
      price: '$16.00',
      brand: 'Fitness Wear',
      rating: '4.7 (45 reviews)',
      image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&auto=format&fit=crop&q=60',
      link: 'https://dfyne.com'
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
            className="relative w-full max-w-lg overflow-y-auto max-h-[90vh] rounded-3xl bg-neutral-50 text-neutral-800 shadow-2xl border border-neutral-100"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white px-6 py-4 border-b border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-950">Shop My Fits</h3>
                  <p className="text-[10px] text-neutral-500 font-medium">Recomendações de looks por Samyra</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* List */}
            <div className="p-6 grid gap-5 sm:grid-cols-2">
              {outfits.map((fit) => (
                <div
                  key={fit.id}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200/60 shadow-sm flex flex-col group hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-neutral-100">
                    <img
                      src={fit.image}
                      alt={fit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleLike(fit.id)}
                      className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm hover:scale-110 active:scale-90 transition-all text-neutral-600 hover:text-pink-500"
                    >
                      <Heart
                        className={`h-4 w-4 transition-colors ${
                          likedItems[fit.id] ? 'fill-pink-500 text-pink-500' : ''
                        }`}
                      />
                    </button>

                    <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur px-2 py-0.5 rounded-lg text-[9px] font-bold tracking-wide uppercase text-white">
                      {fit.brand}
                    </div>
                  </div>

                  <div className="p-3.5 flex flex-col flex-grow">
                    <h4 className="text-xs font-semibold text-neutral-900 line-clamp-2 h-8 leading-tight mb-1">
                      {fit.title}
                    </h4>
                    
                    <div className="flex items-center gap-1 text-[10px] text-amber-500 mb-2">
                      <Star className="h-3 w-3 fill-amber-500" />
                      <span className="font-semibold">{fit.rating}</span>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-3">
                      <span className="font-bold text-sm text-neutral-950">{fit.price}</span>
                      <a
                        href={fit.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg bg-pink-500 hover:bg-pink-600 text-white text-[10px] font-bold px-2.5 py-1.5 transition-all shadow-sm active:scale-95"
                      >
                        <span>Comprar</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
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
