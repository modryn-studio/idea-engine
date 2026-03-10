import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  // basePath is filled in by /init from the URL field in context.md.
  // Format: '/tools/your-slug'
  // Must match the source path in modryn-studio-v2's next.config.ts rewrites().
  basePath: '/tools/TODO_SLUG',
  async rewrites() {
    return {
      // PostHog reverse proxy — routes analytics through the same domain to
      // avoid ad-blocker interference. Works in local dev and production.
      beforeFiles: [
        {
          source: '/ingest/static/:path*',
          destination: 'https://us-assets.i.posthog.com/static/:path*',
        },
        {
          source: '/ingest/:path*',
          destination: 'https://us.i.posthog.com/:path*',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
