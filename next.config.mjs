/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['i.imgur.com', 'imgur.com'],
  },
  output: "export",
  basePath: isGithubPages ? "/chaos-control-ai" : "",
  trailingSlash: true,
};

export default nextConfig;
