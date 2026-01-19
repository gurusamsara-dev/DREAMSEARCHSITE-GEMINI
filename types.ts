export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'House' | 'Condo' | 'Villa' | 'Apartment';
  imageUrl: string;
  description: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type ViewState = 'HOME' | 'PROPERTIES' | 'CONTACT';