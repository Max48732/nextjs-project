import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,  
  cacheLife: {
    tasks: {
      stale: 600,      
      revalidate: 1800, 
      expire: 7200      
    }
  }
}

export default nextConfig