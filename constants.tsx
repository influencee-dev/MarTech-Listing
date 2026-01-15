
import { MartechTool, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'seo', label: 'SEO & Content', icon: '🔍' },
  { id: 'social', label: 'Social Media', icon: '📱' },
  { id: 'crm', label: 'CRM & Sales', icon: '🤝' },
  { id: 'ai', label: 'AI & Automation', icon: '🤖' },
  { id: 'analytics', label: 'Analytics', icon: '📊' },
  { id: 'ads', label: 'Ads & SEM', icon: '💰' },
];

export const MOCK_TOOLS: MartechTool[] = [
  {
    id: 1,
    name: 'GrowthMetrics AI',
    category: 'analytics',
    type: 'SaaS',
    short_pitch: 'Predictive analytics for modern SaaS teams.',
    software_description: 'GrowthMetrics AI leverages advanced neural networks to predict customer churn before it happens. It integrates directly with your payment processor to provide real-time revenue health scores and automated intervention workflows.',
    features: ['Real-time Churn Prediction', 'Revenue Forecasting', 'Automated Cohort Analysis', 'Custom Event Tracking'],
    integrations: ['Stripe', 'HubSpot', 'Salesforce', 'Slack'],
    pricing_model: 'Paid',
    pricing_starting_at: '$299/mo',
    location: 'San Francisco, CA',
    logo_url: 'https://picsum.photos/seed/tool1/200/200',
    cover_url: 'https://picsum.photos/seed/cover1/1200/400',
    website_url: 'https://example.com',
    contact_email: 'sales@growthmetrics.ai'
  },
  {
    id: 2,
    name: 'ContentFlow Pro',
    category: 'seo',
    type: 'SaaS',
    short_pitch: 'The ultimate editorial calendar for high-velocity teams.',
    software_description: 'Manage thousands of content pieces with ease. ContentFlow Pro provides a visual representation of your entire content strategy, from ideation to distribution.',
    features: ['Visual Workflow Builder', 'AI Content Optimization', 'Multi-channel Scheduling', 'Semantic SEO Audit'],
    integrations: ['WordPress', 'Webflow', 'Ghost', 'Medium'],
    pricing_model: 'Freemium',
    pricing_starting_at: '$0',
    location: 'London, UK',
    logo_url: 'https://picsum.photos/seed/tool2/200/200',
    cover_url: 'https://picsum.photos/seed/cover2/1200/400',
    website_url: 'https://example.com',
    contact_email: 'hello@contentflow.io'
  },
  {
    id: 3,
    name: 'OmniConnect CRM',
    category: 'crm',
    type: 'Enterprise',
    short_pitch: 'Unified customer data platform for omnichannel sales.',
    software_description: 'OmniConnect breaks down silos between departments by providing a single source of truth for every customer interaction across web, mobile, and offline channels.',
    features: ['360-degree Customer View', 'Automated Lead Scoring', 'Dynamic Segment Creation', 'Enterprise API Access'],
    integrations: ['Shopify', 'Zendesk', 'Magento', 'Twilio'],
    pricing_model: 'Custom',
    pricing_starting_at: 'Contact Sales',
    location: 'Berlin, DE',
    logo_url: 'https://picsum.photos/seed/tool3/200/200',
    cover_url: 'https://picsum.photos/seed/cover3/1200/400',
    website_url: 'https://example.com',
    contact_email: 'enterprise@omniconnect.com'
  },
  {
    id: 4,
    name: 'SocialPulse',
    category: 'social',
    type: 'SaaS',
    short_pitch: 'Listen to the internet in real-time.',
    software_description: 'SocialPulse uses sentiment analysis to monitor brand mentions across millions of digital sources, allowing marketing teams to react instantly to trends and crises.',
    features: ['Sentiment Analysis', 'Real-time Alerting', 'Influencer Identification', 'Competitor Benchmarking'],
    integrations: ['Twitter API', 'Reddit', 'Instagram Business', 'Discord'],
    pricing_model: 'Paid',
    pricing_starting_at: '$99/mo',
    location: 'New York, NY',
    logo_url: 'https://picsum.photos/seed/tool4/200/200',
    cover_url: 'https://picsum.photos/seed/cover4/1200/400',
    website_url: 'https://example.com',
    contact_email: 'support@socialpulse.com'
  }
];
