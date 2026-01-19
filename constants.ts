import { Property } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Seaside Villa',
    price: 4250000,
    address: '123 Ocean Blvd, Malibu, CA',
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: 'Villa',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    description: 'An architectural masterpiece overlooking the Pacific. Features floor-to-ceiling glass walls, a private infinity pool, and state-of-the-art kitchen.',
    features: ['Ocean View', 'Infinity Pool', 'Wine Cellar', 'Smart Home System']
  },
  {
    id: '2',
    title: 'Penthouse at The Heights',
    price: 2850000,
    address: '888 Skyline Dr, San Francisco, CA',
    beds: 3,
    baths: 3,
    sqft: 2800,
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'Breathtaking 360-degree city views. This penthouse defines urban luxury with private elevator access and a 1,000 sq ft terrace.',
    features: ['City Panorama', 'Private Terrace', '24/7 Concierge', 'Valet Parking']
  },
  {
    id: '3',
    title: 'Historic Oak Estate',
    price: 1550000,
    address: '452 Heritage Lane, Savannah, GA',
    beds: 4,
    baths: 3,
    sqft: 3600,
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    description: 'A beautifully restored Southern manor. Features original hardwood floors, a wraparound porch, and a secret garden with century-old oaks.',
    features: ['Historic Detail', 'Large Acreage', 'Chef\'s Kitchen', 'Library']
  },
  {
    id: '4',
    title: 'Minimalist Desert Retreat',
    price: 1950000,
    address: '777 Cactus Ridge, Palm Springs, CA',
    beds: 3,
    baths: 2,
    sqft: 2400,
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
    description: 'Clean lines and natural light. This desert modern home blends indoor and outdoor living seamlessly with a central courtyard.',
    features: ['Courtyard Pool', 'Solar Powered', 'Desert Landscaping', 'Zen Garden']
  },
  {
    id: '5',
    title: 'Alpine Glass Lodge',
    price: 3100000,
    address: '50 Summit Pass, Aspen, CO',
    beds: 4,
    baths: 4,
    sqft: 4000,
    type: 'Villa',
    imageUrl: 'https://images.unsplash.com/photo-1513584684374-8bdb7483fe8f?auto=format&fit=crop&w=1200&q=80',
    description: 'The ultimate winter sanctuary. Ski-in/ski-out access, three stone fireplaces, and a heated outdoor spa overlooking the slopes.',
    features: ['Ski Access', 'Home Theater', 'Heated Floors', 'Mountain View']
  },
  {
    id: '6',
    title: 'Bohemian Waterside Loft',
    price: 920000,
    address: '22 Dockside Way, Portland, OR',
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: 'Condo',
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
    description: 'Industrial charm meets modern comfort. Exposed brick, reclaimed wood beams, and a private balcony over the river.',
    features: ['River Access', 'Industrial Style', 'High Ceilings', 'Pet Friendly']
  }
];

export const NAV_LINKS = [
  { name: 'Home', value: 'HOME' },
  { name: 'Properties', value: 'PROPERTIES' },
  { name: 'Contact', value: 'CONTACT' },
];