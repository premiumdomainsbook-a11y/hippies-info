export interface Domain {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  link: string;
  featured?: boolean;
  category?: 'Crypto' | 'Lifestyle' | 'Business' | 'Geo' | 'Other';
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  keywords: string[];
  imageUrl: string;
  date: string;
}