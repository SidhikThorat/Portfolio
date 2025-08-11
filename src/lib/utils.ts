import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to get public asset URL
export function getPublicAsset(path: string): string {
  // In development, assets are served from the root
  // In production, they should be served from the root as well
  return path.startsWith('/') ? path : `/${path}`
}
