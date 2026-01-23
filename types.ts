export interface ServicePackage {
  title: string;
  description: string;
  price?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'drink' | 'dessert';
  image: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': any;
    }
  }
}