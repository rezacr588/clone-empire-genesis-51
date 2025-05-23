import axios, { AxiosRequestConfig } from 'axios';
import { GOHIGHLEVEL } from './config';

// GoHighLevel API configuration
interface GoHighLevelConfig {
  apiKey?: string;
  locationId?: string;
  calendarId?: string;
  userId?: string;
}

// Default configuration loaded from environment variables via config.ts
let config: GoHighLevelConfig = {
  apiKey: GOHIGHLEVEL.API_KEY,
  locationId: GOHIGHLEVEL.LOCATION_ID,
  calendarId: GOHIGHLEVEL.DEFAULT_CALENDAR_ID,
  userId: GOHIGHLEVEL.USER_ID,
};

/**
 * Initialize the GoHighLevel API with configuration
 */
export function initGoHighLevelApi(configuration: GoHighLevelConfig) {
  config = { ...config, ...configuration };
}

/**
 * Get request headers for API calls
 */
const getHeaders = (contentType = false) => {
  const headers: Record<string, string> = {
    'Authorization': `Bearer ${config.apiKey}`,
    'Version': '2021-07-28',
    'locationId': config.locationId || '',
  };
  
  if (contentType) {
    headers['Content-Type'] = 'application/json';
  }
  
  return headers;
};

/**
 * Generic API request handler
 */
async function apiRequest<T>(
  method: 'get' | 'post' | 'put' | 'delete',
  endpoint: string,
  data?: any,
  params?: Record<string, string>,
  contentType = false
): Promise<T> {
  if (!config.apiKey || !config.locationId) {
    throw new Error('GoHighLevel API not properly configured. Missing apiKey or locationId.');
  }

  const options: AxiosRequestConfig = {
    method,
    url: `https://services.leadconnectorhq.com${endpoint}`,
    headers: getHeaders(contentType),
    ...(data && { data }),
    ...(params && { params })
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error(`Error in GoHighLevel API request to ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Get calendar details by ID
 */
export const getCalendar = (calendarId = config.calendarId || '') => 
  apiRequest<any>('get', `/calendars/${calendarId}`);

/**
 * Get available time slots for a calendar
 */
export const getAvailableSlots = (
  calendarId = config.calendarId || '',
  startDate: string,
  endDate: string
) => apiRequest<any>(
  'get', 
  `/calendars/${calendarId}/available-slots`, 
  undefined, 
  { startDate, endDate }
);

/**
 * Create a calendar appointment
 */
export const createAppointment = (
  calendarId = config.calendarId || '', 
  data: {
    startTime: string;
    endTime: string;
    title?: string;
    contactId?: string;
    contact?: {
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
    };
    notes?: string;
  }
) => apiRequest<any>('post', `/calendars/${calendarId}/appointments`, data, undefined, true);

/**
 * Get embed URL for a calendar
 */
export const getCalendarEmbedUrl = (calendarId = config.calendarId || '') => {
  if (!calendarId) {
    throw new Error('Calendar ID is required for embedding');
  }
  return `https://calendars.leadconnectorhq.com/embed/${calendarId}`;
};

/**
 * Configuration helper for GoHighLevel
 */
export const GOHIGHLEVEL_DEFAULT = {
  DEFAULT_CALENDAR_ID: config.calendarId || '',
  DEFAULT_LOCATION_ID: config.locationId || '',
}; 