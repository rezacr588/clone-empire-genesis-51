import axios from 'axios';
import { CALENDLY } from './config';

// Get Calendly API token from config
const CALENDLY_API_TOKEN = CALENDLY.API_TOKEN;

// Create axios client with better error handling
export const calendlyClient = axios.create({
  baseURL: 'https://api.calendly.com',
  headers: {
    'Content-Type': 'application/json',
    ...(CALENDLY_API_TOKEN
      ? { Authorization: `Bearer ${CALENDLY_API_TOKEN}` }
      : {}),
  },
});

// Add error handling interceptor
calendlyClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle Calendly API errors
    if (error.response) {
      console.error('Calendly API error:', error.response.data);
      
      // Helpful message if token is not provided
      if (error.response.status === 401 && !CALENDLY_API_TOKEN) {
        console.error('Calendly API token is missing. Add VITE_CALENDLY_API_TOKEN to your .env file.');
      }
    } else {
      console.error('Error connecting to Calendly API:', error.message);
    }
    return Promise.reject(error);
  }
);

/**
 * Fetch the authenticated user's details
 */
export async function getCurrentUser() {
  if (!CALENDLY_API_TOKEN) {
    console.warn('Calendly API token is not set. Add VITE_CALENDLY_API_TOKEN to your .env file.');
    return null;
  }
  
  try {
    const response = await calendlyClient.get('/users/me');
    return response.data;
  } catch (error) {
    console.error('Failed to get current user:', error);
    return null;
  }
}

/**
 * List all available event types for the authenticated user
 */
export async function listEventTypes() {
  if (!CALENDLY_API_TOKEN) {
    console.warn('Calendly API token is not set. Add VITE_CALENDLY_API_TOKEN to your .env file.');
    return { data: [] };
  }
  
  try {
    const response = await calendlyClient.get('/event_types');
    return response.data;
  } catch (error) {
    console.error('Failed to list event types:', error);
    return { data: [] };
  }
}

/**
 * Create a new scheduled event (invitee) via the Calendly API
 * @param {string} eventTypeUri - The URI of the event type
 * @param {{ name: string, email: string, [key: string]: any }} inviteeData - The invitee details
 */
export async function scheduleEvent(
  eventTypeUri: string, 
  inviteeData: { name: string, email: string, [key: string]: any }
) {
  if (!CALENDLY_API_TOKEN) {
    console.warn('Calendly API token is not set. Add VITE_CALENDLY_API_TOKEN to your .env file.');
    throw new Error('Calendly API token is missing');
  }
  
  try {
    const payload = {
      event_type: eventTypeUri,
      invitee: inviteeData,
    };
    const response = await calendlyClient.post('/scheduled_events', payload);
    return response.data;
  } catch (error) {
    console.error('Failed to schedule event:', error);
    throw error;
  }
} 