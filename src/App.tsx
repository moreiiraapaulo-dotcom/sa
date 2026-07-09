import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoreVertical, Asterisk, Share } from 'lucide-react';

// Import our custom interactive components
import MentorshipModal from './components/MentorshipModal';
import ShopFitsModal from './components/ShopFitsModal';
import TikTokModal from './components/TikTokModal';
import InstagramModal from './components/InstagramModal';
import DiscountModal from './components/DiscountModal';
import ShareModal from './components/ShareModal';
import InfoModal from './components/InfoModal';
import FooterModals from './components/FooterModals';

// Import types
import { LinkItem } from './types';

// Static image imports for Vite asset bundling
import imgProfile from './assets/images/profile_avatar_1782608628388.jpg';
import imgMentoria from './assets/images/mentoria_thumb_1782608687064.jpg';
import imgShopFits from './assets/images/shop_fits_1782608637154.jpg';
import imgTiktok from './assets/images/tiktok_thumb_1782608645844.jpg';
import imgDfyne from './assets/images/dfyne_gym_1782608665874.jpg';
import imgLeopard from './assets/images/light_gray_leopard_1782610296745.jpg';
import imgBurgundyLeopard from './assets/images/burgundy_leopard_pattern_1782609847965.jpg';
import imgSubtleLeopard from './assets/images/subtle_leopard_pattern_1782610078227.jpg';
import imgInstaOriginal from './assets/images/saaa.jpg';

// Inline base64 Instagram thumbnail to ensure it builds & displays reliably on custom deployments like Vercel without requiring Git tracking of large binary blobs
const imgInstaNew = 'data:image/jpeg;base64,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';

// Helper to bypass hotlinking protection on social media CDN images (Instagram, Facebook)
const getProxyUrl = (url: string) => {
  if (url && url.startsWith('http') && !url.includes('images.weserv.nl')) {
    return `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;
  }
  return url;
};

// Image assets map
const IMAGES = {
  profile: getProxyUrl('https://scontent-gru1-2.cdninstagram.com/v/t51.82787-19/532535407_18517869388002708_6558884099342187209_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2gHrKrQfhG0AIrz4Phb92MBKu0ykfvZkySLpE0HzLpja_8oN686lmYbf_08PHBqkyot5Vdm8Yx399mSdLu5ZwjaH&_nc_ohc=zIYNDMvsMKgQ7kNvwGsLGTj&_nc_gid=D14aSvAzfSMTtd3wnJONGQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQA8Qi65gMRg62OI6nOGgqRC0VCq8tQI2_aKUwEJY5WTGw&oe=6A54EF72&_nc_sid=7a9f4b'),
  mentoria: getProxyUrl('https://scontent-gru2-1.xx.fbcdn.net/v/t1.15752-9/729003826_1374473857974655_6827511599003851738_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=1BoPCFNtLfMQ7kNvwFl0d15&_nc_oc=AdrD6NvaCwMJjxDcbuTUvjCcUM0tJsHfQq_-b-X7ocGT3eNZXQ9-G7imtF6k-tsf816iYtMiMFwQ9kv1wlj5LvZT&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gru2-1.xx&_nc_ss=7a22e&oh=03_Q7cD5gGLB8YF8SPsWA25hSvDgd7tp_Gq10ENO7yryYw9V-LJdw&oe=6A67EB5E'),
  shopFits: getProxyUrl('https://scontent-gru1-2.xx.fbcdn.net/v/t1.15752-9/728333671_1760382132080075_6071192769964366362_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=k4HUm-VaGBQQ7kNvwGUGoN0&_nc_oc=Adr1Wmtn2YyQa-rty8OuMTjraHiY89WnG97K7_MjGWsE0cNdt22velFbWghBBDFT_JT_bHHAqPvwIHjwklho46UA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_ss=7a22e&oh=03_Q7cD5gFKg4jmTCS77AZ5nQhDp7oDx1JVvv0Ln_odp2ZdZL9wPA&oe=6A67EABB'),
  tiktok: getProxyUrl('https://p16-common-sign.tiktokcdn.com/tos-maliva-avt-0068/e918cf45ef69357a84732c8d8b649c4f~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=29cdb184&x-expires=1783738800&x-signature=JWvxjLAuVY1cuq82qtvjAA8EIEg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my'),
  insta: getProxyUrl('https://scontent-gru1-2.cdninstagram.com/v/t51.82787-19/532535407_18517869388002708_6558884099342187209_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2gHrKrQfhG0AIrz4Phb92MBKu0ykfvZkySLpE0HzLpja_8oN686lmYbf_08PHBqkyot5Vdm8Yx399mSdLu5ZwjaH&_nc_ohc=zIYNDMvsMKgQ7kNvwGsLGTj&_nc_gid=D14aSvAzfSMTtd3wnJONGQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQA8Qi65gMRg62OI6nOGgqRC0VCq8tQI2_aKUwEJY5WTGw&oe=6A54EF72&_nc_sid=7a9f4b'),
  dfyne: getProxyUrl('https://yt3.googleusercontent.com/1_-Ry5iCO8Ud7DFdCXaHpKRIMW8BvCuglPfhol-OUHRS_H9KBFlI6WhP1qwNEr8JUWWFJKpmusc=s160-c-k-c0x00ffffff-no-rj'),
  leopard: imgLeopard,
  burgundyLeopard: imgBurgundyLeopard,
  subtleLeopard: imgSubtleLeopard
};

export default function App() {
  // Modal states
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [footerModalType, setFooterModalType] = useState<'cookie' | 'report' | 'privacy' | 'more' | null>(null);

  // Linktree profile links data
  const links: LinkItem[] = [
    {
      id: 'mentorship',
      title: 'Como mudei meu Corpo + Grupo',
      image: IMAGES.mentoria,
      type: 'mentorship',
      url: 'https://pay.kiwify.com.br/VCsJ52j?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGngokzDpZIrPWTAZMZh0F1aNafTpU9wgh9tQ7uP0dQ8CjGEvx5UzsuxfBJvrg_aem_YWdncwmh1ZiAsNT5FB6rH5iguZ1b&brid=YWdncwFT2_Bqt8CfDttU019IbgFK&utm_id=97760_v0_s00_e0_tv3'
    },
    {
      id: 'shopmyfits',
      title: 'Manual Glow up + Grupo',
      image: IMAGES.shopFits,
      type: 'shop',
      url: 'https://pay.kiwify.com.br/PJISPlh?utm_id=97757_v0_s00_e0_tv0'
    },
    {
      id: 'tiktok',
      title: 'Tik Tok',
      image: IMAGES.tiktok,
      type: 'tiktok',
      url: 'https://www.tiktok.com/@lov.aguacomgas'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      image: IMAGES.insta,
      type: 'instagram',
      url: 'https://www.instagram.com/moreirasamy/'
    },
    {
      id: 'dfyne',
      title: 'Afiliação / Ganhe Com Meus Links',
      image: IMAGES.dfyne,
      type: 'discount',
      url: 'https://samyramoreiraaffl-mu.vercel.app/'
    }
  ];

  const handleLinkClick = (link: LinkItem) => {
    if (link.url && link.url !== '#') {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } else {
      setActiveModal(link.id);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen w-full bg-[#E5E7EB] py-6 px-4 md:py-12 flex flex-col items-center justify-center font-sans">
      {/* Outer Card - Mobile Frame View */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        id="linktree-card"
        className="w-full max-w-md rounded-[40px] overflow-hidden shadow-2xl border border-white/20 flex flex-col relative bg-cover bg-center"
        style={{ minHeight: '760px', backgroundImage: `url(${IMAGES.leopard})` }}
      >
        {/* Top Header Section - Transparent overlay with background image visibility */}
        <div className="relative h-44 bg-black/5 w-full flex items-start justify-end px-6 pt-6 shrink-0 backdrop-blur-[0.5px]">
          {/* Share Icon (Right) */}
          <button
            onClick={() => setActiveModal('share')}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition-transform active:scale-95 hover:scale-105"
            title="Compartilhar perfil"
          >
            <Share className="h-4.5 w-4.5 stroke-[2.5]" />
          </button>

          {/* Profile Image - Centered and overlapping the boundary */}
          <div className="absolute left-1/2 -bottom-11 -translate-x-1/2 z-10">
            <div className="relative rounded-full shadow-md overflow-hidden">
              <img
                src={IMAGES.profile}
                alt="Samyra Moreira Profile"
                className="h-[84px] w-[84px] rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div 
          className="flex-grow pt-14 pb-8 px-6 flex flex-col items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.leopard})` }}
        >
          {/* Profile Details */}
          <div className="text-center mb-6">
            <h1 className="font-sans font-bold text-neutral-900 tracking-wider text-lg uppercase leading-tight select-all drop-shadow-sm">
              SAMYRA MOREIRA
            </h1>
            <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-700 font-medium mt-1 select-all drop-shadow-sm">
              <span>💌</span>
              <span>samyramoreira75@gmail.com</span>
            </div>
          </div>

          {/* Links List */}
          <div className="w-full flex-grow space-y-4 max-w-[360px] mx-auto">
            {links.map((link, idx) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                <button
                  onClick={() => handleLinkClick(link)}
                  className="w-full rounded-full bg-white hover:bg-neutral-50 p-2 pl-2 md:pl-2.5 pr-5 flex items-center justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.99] group border border-transparent hover:border-white/40"
                >
                  {/* Left: Round Thumbnail Image */}
                  <div className="h-11 w-11 rounded-full overflow-hidden bg-neutral-100 shadow-sm shrink-0 border border-neutral-100 flex items-center justify-center">
                    <img
                      src={link.image}
                      alt={link.title}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Center: Title */}
                  <span className="flex-grow text-center text-xs md:text-sm font-semibold text-neutral-800 tracking-wide font-sans pl-2 select-none group-hover:text-neutral-950 transition-colors">
                    {link.title}
                  </span>

                  {/* Right: More Options Icon */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-100 text-neutral-400 group-hover:text-neutral-600 transition-colors">
                    <MoreVertical className="h-4.5 w-4.5" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>


        </div>
      </motion.div>

      {/* --- Interactive Modal Overlays --- */}

      {/* Mentoria Modal */}
      <MentorshipModal
        isOpen={activeModal === 'mentorship'}
        onClose={() => setActiveModal(null)}
        mentorImage={IMAGES.profile}
      />

      {/* Shop Fits Modal */}
      <ShopFitsModal
        isOpen={activeModal === 'shopmyfits'}
        onClose={() => setActiveModal(null)}
        shopImage={IMAGES.shopFits}
      />

      {/* TikTok Modal */}
      <TikTokModal
        isOpen={activeModal === 'tiktok'}
        onClose={() => setActiveModal(null)}
        tiktokImage={IMAGES.tiktok}
      />

      {/* Instagram Modal */}
      <InstagramModal
        isOpen={activeModal === 'instagram'}
        onClose={() => setActiveModal(null)}
        instaImage={IMAGES.insta}
      />

      {/* Discount Modal */}
      <DiscountModal
        isOpen={activeModal === 'dfyne'}
        onClose={() => setActiveModal(null)}
        brandImage={IMAGES.dfyne}
      />

      {/* Profile Share Modal */}
      <ShareModal
        isOpen={activeModal === 'share'}
        onClose={() => setActiveModal(null)}
        profileUrl={window.location.origin}
      />

      {/* Info / Bio Modal */}
      <InfoModal
        isOpen={activeModal === 'info'}
        onClose={() => setActiveModal(null)}
        profileImage={IMAGES.profile}
      />

      {/* Footer Links Modals */}
      <FooterModals
        isOpen={footerModalType !== null}
        type={footerModalType}
        onClose={() => setFooterModalType(null)}
      />
    </div>
  );
}
