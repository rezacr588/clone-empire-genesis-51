#!/usr/bin/env node
import { checkAndDownloadMissingImages } from '../lib/imageChecker';

// Main function to run the image checker
async function main() {
  console.log('Starting image verification and download process...');
  
  try {
    // Check for missing images in both src and public directories
    await checkAndDownloadMissingImages(['src', 'public']);
    console.log('Image verification completed successfully!');
  } catch (error) {
    console.error('Error during image verification:', error);
    process.exit(1);
  }
}

// Run the main function
main(); 