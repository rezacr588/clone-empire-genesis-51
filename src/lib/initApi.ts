import { initGoHighLevelApi } from './goHighLevelApi';
import { GOHIGHLEVEL } from './config';

/**
 * Initialize all API configurations
 */
export function initializeApis() {
  // Initialize GoHighLevel API with config from environment variables
  initGoHighLevelApi(GOHIGHLEVEL);
  
  // Log initialization status in development only
  if (import.meta.env.DEV) {
    const { API_KEY, LOCATION_ID, DEFAULT_CALENDAR_ID } = GOHIGHLEVEL;
    const missingConfigs = Object.entries({ API_KEY, LOCATION_ID, DEFAULT_CALENDAR_ID })
      .filter(([_, value]) => !value)
      .map(([key]) => `VITE_GOHIGHLEVEL_${key}`);
    
    if (missingConfigs.length > 0) {
      console.warn(`⚠️ Missing GoHighLevel configurations: ${missingConfigs.join(', ')}`);
      console.info('To use GoHighLevel calendars, please add these environment variables to your .env file');
    } else {
      console.info('✅ GoHighLevel API initialized successfully');
    }
  }
} 