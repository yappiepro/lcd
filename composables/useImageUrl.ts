import { useRuntimeConfig } from '#imports'

export const useImageUrl = (path: string) => {
  const config = useRuntimeConfig()
  const baseURL = config.app.baseURL || '/'
  
  // Ensure baseURL ends with /
  const base = baseURL.endsWith('/') ? baseURL : baseURL + '/'
  
  // Remove leading / from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  return base + cleanPath
}
