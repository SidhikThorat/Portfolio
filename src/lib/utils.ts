import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to get public asset URL
export function getPublicAsset(path: string): string {
  // Ensure the path starts with / and add a cache-busting parameter for images
  const basePath = path.startsWith('/') ? path : `/${path}`;
  
  // Add cache-busting for images to prevent caching issues
  if (path.toLowerCase().endsWith('.png') || path.toLowerCase().endsWith('.jpg') || path.toLowerCase().endsWith('.jpeg')) {
    return `${basePath}?v=${Date.now()}`;
  }
  
  return basePath;
}
