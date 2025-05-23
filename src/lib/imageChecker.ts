import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { URL } from 'url';

interface ImageReference {
  src: string;
  alt: string;
  location: string; // File where this image is referenced
}

/**
 * Extracts all image sources from a given file
 */
export const extractImageSources = (filePath: string): ImageReference[] => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']+)["'][^>]*>/g;
    const backgroundImageRegex = /background(?:-image)?:\s*url\(['"]?([^'"()]+)['"]?\)/g;
    
    const images: ImageReference[] = [];
    
    // Extract src and alt from img tags
    let match;
    while ((match = regex.exec(content)) !== null) {
      images.push({
        src: match[1],
        alt: match[2],
        location: filePath,
      });
    }
    
    // Extract urls from background-image styles
    while ((match = backgroundImageRegex.exec(content)) !== null) {
      images.push({
        src: match[1],
        alt: 'Background Image',
        location: filePath,
      });
    }
    
    return images;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
};

/**
 * Checks if an image exists locally
 */
export const imageExists = (imagePath: string): boolean => {
  // Handle data URLs
  if (imagePath.startsWith('data:')) {
    return true;
  }
  
  // Handle remote URLs
  if (imagePath.startsWith('http')) {
    return true; // We'll check remote URLs when downloading
  }
  
  // Handle relative paths
  const fullPath = path.join(process.cwd(), 'public', imagePath.startsWith('/') ? imagePath.slice(1) : imagePath);
  return fs.existsSync(fullPath);
};

/**
 * Downloads an image from a URL
 */
export const downloadImage = (imageUrl: string, savePath: string): Promise<boolean> => {
  return new Promise((resolve) => {
    try {
      // Create directory if it doesn't exist
      const dir = path.dirname(savePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      console.log(`Downloading image from ${imageUrl} to ${savePath}...`);
      
      fetch(imageUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to download image: Status code ${response.status}`);
          }
          return response.arrayBuffer();
        })
        .then(buffer => {
          fs.writeFileSync(savePath, Buffer.from(buffer));
          console.log(`Successfully downloaded image to ${savePath}`);
          resolve(true);
        })
        .catch(error => {
          console.error(`Error downloading image: ${error.message}`);
          resolve(false);
        });
    } catch (error) {
      console.error('Error in downloadImage:', error);
      resolve(false);
    }
  });
};

/**
 * Process a list of image references
 */
export const processImageReferences = async (images: ImageReference[]): Promise<void> => {
  for (const image of images) {
    if (image.src.startsWith('http')) {
      const parsedUrl = new URL(image.src);
      const filename = path.basename(parsedUrl.pathname);
      
      // Special handling for Unsplash images
      let saveDir = 'public/images/external';
      let savePath = path.join(process.cwd(), saveDir, filename);
      
      if (image.src.includes('unsplash.com')) {
        saveDir = 'public/images/unsplash';
        savePath = path.join(process.cwd(), saveDir, filename);
      }
      
      if (!fs.existsSync(savePath)) {
        console.log(`Image not found locally: ${image.src}`);
        console.log(`Referenced in: ${image.location}`);
        console.log(`Attempting to download to ${savePath}...`);
        
        await downloadImage(image.src, savePath);
        
        // Update image reference in file to use local path
        const newPath = `/${path.relative('public', savePath)}`;
        updateImageSourceInFile(image.location, image.src, newPath);
      }
    } else if (!imageExists(image.src)) {
      console.log(`Image not found: ${image.src}`);
      console.log(`Referenced in: ${image.location}`);
    }
  }
};

/**
 * Updates an image source in a file
 */
export const updateImageSourceInFile = (filePath: string, oldSrc: string, newSrc: string): void => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Escape special regex characters in oldSrc
    const escapedOldSrc = oldSrc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Replace in img tags
    const imgRegex = new RegExp(`src=["']${escapedOldSrc}["']`, 'g');
    content = content.replace(imgRegex, `src="${newSrc}"`);
    
    // Replace in background-image styles
    const bgRegex = new RegExp(`background(?:-image)?:\\s*url\\(['"]?${escapedOldSrc}['"]?\\)`, 'g');
    content = content.replace(bgRegex, `background-image: url('${newSrc}')`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated reference in ${filePath} from ${oldSrc} to ${newSrc}`);
  } catch (error) {
    console.error(`Error updating file ${filePath}:`, error);
  }
};

/**
 * Scans the codebase for image references and downloads missing images
 */
export const checkAndDownloadMissingImages = async (directories = ['src']): Promise<void> => {
  console.log('Checking for missing images...');
  
  const allImages: ImageReference[] = [];
  
  for (const dir of directories) {
    const files = walkSync(dir);
    
    for (const file of files) {
      if (/\.(tsx|jsx|ts|js|css)$/.test(file)) {
        const images = extractImageSources(file);
        allImages.push(...images);
      }
    }
  }
  
  console.log(`Found ${allImages.length} image references`);
  await processImageReferences(allImages);
  console.log('Completed checking and downloading missing images');
};

/**
 * Recursively walks a directory and returns all files
 */
export const walkSync = (dir: string): string[] => {
  if (!fs.existsSync(dir)) {
    return [];
  }
  
  const files: string[] = [];
  const dirEntries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of dirEntries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      files.push(...walkSync(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  
  return files;
}; 