// Global configuration settings

// GoHighLevel configuration
export const GOHIGHLEVEL = {
  // Default calendar ID for GoHighLevel
  DEFAULT_CALENDAR_ID: import.meta.env.VITE_GOHIGHLEVEL_CALENDAR_ID || '',
  
  // Location ID for GoHighLevel API
  LOCATION_ID: import.meta.env.VITE_GOHIGHLEVEL_LOCATION_ID || '',
  
  // API token for GoHighLevel API access
  API_KEY: import.meta.env.VITE_GOHIGHLEVEL_API_KEY || '',
  
  // User ID for GoHighLevel API access
  USER_ID: import.meta.env.VITE_GOHIGHLEVEL_USER_ID || '',
};

// Calendly configuration (legacy - to be removed after migration)
export const CALENDLY = {
  // Default URL for Calendly meetings
  // Replace this with your actual Calendly URL
  DEFAULT_URL: import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/clone-empire/demo',
  
  // API token for Calendly API access
  // You'll need to create a .env file with your actual API token
  API_TOKEN: import.meta.env.VITE_CALENDLY_API_TOKEN || '',
};

// Company information
export const COMPANY = {
  NAME: 'Clone Empire',
  EMAIL: {
    INFO: 'info@cloneempire.ai',
    SUPPORT: 'support@cloneempire.ai',
    SALES: 'sales@cloneempire.com',
  },
  PHONE: '+1 (555) 123-4567',
  ADDRESS: {
    STREET: '123 AI Boulevard',
    CITY: 'San Francisco',
    STATE: 'CA',
    ZIP: '94105',
  },
};

// Application text constants
export const TEXT = {
  HERO: {
    TITLE: 'Build Your AI Clone Empire',
    SUBTITLE: 'Your AI agent works 24/7/365',
    DESCRIPTION: 'Deploy autonomous AI agents that handle sales, support, and operations with your voice, personality, and expertise — scaling your business 24/7/365.',
    CTA: 'Book a Demo',
    SECONDARY_CTA: 'See it in Action',
  },
};

// Stats for displaying on various pages
export const STATS = [
  { value: '24/7', label: 'Automated operations that never sleep' },
  { value: '95%', label: 'Customer satisfaction with AI agents' },
  { value: '10x', label: 'Return on investment with clone automation' },
];

// Contact team information
export const TEAM = {
  CONTACT: {
    NAME: 'Alex Morgan',
    ROLE: 'Customer Success Manager',
  },
}; 