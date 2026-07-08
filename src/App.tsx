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
import imgInsta from './assets/images/insta_thumb_1782608656571.jpg';
import imgDfyne from './assets/images/dfyne_gym_1782608665874.jpg';
import imgLeopard from './assets/images/light_gray_leopard_1782610296745.jpg';
import imgBurgundyLeopard from './assets/images/burgundy_leopard_pattern_1782609847965.jpg';
import imgSubtleLeopard from './assets/images/subtle_leopard_pattern_1782610078227.jpg';

// Image assets map
const IMAGES = {
  profile: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.15752-9/729466584_1021033690535835_6581949086593237082_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=KQ4rsIsgF2UQ7kNvwF3a8H8&_nc_oc=Adp-zPkxTPC3lUCFa4fOYP1YwpFjlMOu4cs3zBwrVo-pagma89rPfc7acWp3SWmq0uEIoA1_3_C8QB5TMtII2x5z&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_ss=7b6a8&oh=03_Q7cD5gEf0Ija5N1bhJMP4z3z2wJnd4WaWTGDx5urwR_WNnyH2g&oe=6A67F8A9',
  mentoria: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.15752-9/729003826_1374473857974655_6827511599003851738_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=1BoPCFNtLfMQ7kNvwFl0d15&_nc_oc=AdrD6NvaCwMJjxDcbuTUvjCcUM0tJsHfQq_-b-X7ocGT3eNZXQ9-G7imtF6k-tsf816iYtMiMFwQ9kv1wlj5LvZT&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gru2-1.xx&_nc_ss=7a22e&oh=03_Q7cD5gGLB8YF8SPsWA25hSvDgd7tp_Gq10ENO7yryYw9V-LJdw&oe=6A67EB5E',
  shopFits: 'https://scontent-gru1-2.xx.fbcdn.net/v/t1.15752-9/728333671_1760382132080075_6071192769964366362_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=k4HUm-VaGBQQ7kNvwGUGoN0&_nc_oc=Adr1Wmtn2YyQa-rty8OuMTjraHiY89WnG97K7_MjGWsE0cNdt22velFbWghBBDFT_JT_bHHAqPvwIHjwklho46UA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_ss=7a22e&oh=03_Q7cD5gFKg4jmTCS77AZ5nQhDp7oDx1JVvv0Ln_odp2ZdZL9wPA&oe=6A67EABB',
  tiktok: 'https://p16-common-sign.tiktokcdn.com/tos-maliva-avt-0068/e918cf45ef69357a84732c8d8b649c4f~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=1f882c43&x-expires=1782792000&x-signature=g0UIPr15w%2Blc9vHDWzuBemYPs58%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
  insta: 'https://scontent-gru2-2.cdninstagram.com/v/t51.82787-19/532535407_18517869388002708_6558884099342187209_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=2ByyPx9VIbIQ7kNvwFcblJH&_nc_oc=AdqKwsA-mMYwyV69EsxP94c-B6vQAF9y09VAk4sAlKho_tBgkLZPGiXZuS4czNBhFbf-MAF_4yLpo_8tNWZBVD0n&_nc_zt=24&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_gid=VG4y_fHqKkoPOrlgwN0c4g&_nc_ss=7b6a8&oh=00_Af9TlDsYEyT2WqlzFSRJsDuWD8P3YJWF52crSiN8vuzP9Q&oe=6A466EF2',
  dfyne: 'https://yt3.googleusercontent.com/1_-Ry5iCO8Ud7DFdCXaHpKRIMW8BvCuglPfhol-OUHRS_H9KBFlI6WhP1qwNEr8JUWWFJKpmusc=s160-c-k-c0x00ffffff-no-rj',
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
