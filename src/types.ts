export interface LinkItem {
  id: string;
  title: string;
  image: string;
  type: 'mentorship' | 'shop' | 'tiktok' | 'instagram' | 'discount';
  url: string;
}

export interface ShopItem {
  id: string;
  title: string;
  price: string;
  image: string;
  brand: string;
  link: string;
}

export interface SocialPost {
  id: string;
  thumbnail: string;
  likes: string;
  comments: string;
  caption: string;
}
