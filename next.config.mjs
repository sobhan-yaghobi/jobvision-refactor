/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xsuywgifuwiufdwmpzxr.supabase.co",
        pathname: "**",
      },
    ],
  },
  output: "standalone",
}

export default nextConfig
