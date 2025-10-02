import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
images: { domains: [] },

async redirects() {
    return [
      {
        source: '/download',
        destination: 'https://apps.apple.com/us/app/book-tracker-bookie/id6443825869',
        permanent: true,
      },
    ];
  },
}

export default withContentlayer(nextConfig)