export interface MartechTool {
  id: number;
  name: string;
  category: string;
  type: 'SaaS' | 'Open Source' | 'Agency Service' | 'Enterprise';
  short_pitch: string;
  software_description: string;
  features: string[];
  integrations: string[];
  pricing_model: 'Free' | 'Freemium' | 'Paid' | 'Custom';
  pricing_starting_at: string;
  price_numeric?: number; // Added for advanced filtering
  location: string;
  logo_url: string;
  cover_url: string;
  website_url: string;
  contact_email: string;
}

export type View = 'HOME' | 'LISTING' | 'PROFILE' | 'SUBMIT';

export type PriceFilter = 'ALL' | 'FREE' | 'ENTRY' | 'PRO' | 'ENTERPRISE';

export interface Category {
  id: string;
  label: string;
  icon: string;
}