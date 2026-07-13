import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Aditya Chakma | Senior Full-Stack & Systems Engineer',
  description: 'Personal portfolio of Aditya Chakma, Senior Full-Stack Software Engineer with 5+ years of experience specializing in high-throughput backend architectures, DevOps, and autonomous agentic AI SDLC systems.',
  icons: {
    icon: '/favicon-13072026.ico',
  },
  openGraph: {
    title: 'Aditya Chakma | Senior Full-Stack & Systems Engineer',
    description: 'Senior Full-Stack Software Engineer with 5+ years of professional experience building scalable systems, high-throughput microservices, and autonomous agentic AI workflows.',
    url: 'https://aditya-chakma.github.io',
    siteName: 'Aditya Chakma Portfolio',
    images: [
      {
        url: '/assets/images/Aditya.jpg',
        width: 800,
        height: 800,
        alt: 'Aditya Chakma - Senior Full-Stack Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Chakma | Senior Full-Stack & Systems Engineer',
    description: 'Senior Software Engineer with 5+ years of experience building scalable systems, microservices, and agentic AI pipelines.',
    images: ['/assets/images/Aditya.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const dpDir = path.join(process.cwd(), 'public/assets/images/dp');
  let images: string[] = [];

  try {
    if (fs.existsSync(dpDir)) {
      const filenames = fs.readdirSync(dpDir);
      images = filenames
        .filter(file => file.startsWith('Aditya_') && file.endsWith('.jpg'))
        .sort((a, b) => {
          const numA = parseInt(a.replace('Aditya_', '').replace('.jpg', ''), 10);
          const numB = parseInt(b.replace('Aditya_', '').replace('.jpg', ''), 10);
          return numA - numB;
        })
        .map(file => `/assets/images/dp/${file}`);
    }
  } catch (error) {
    console.error('Error reading dp directory:', error);
  }

  // Fallback if no images found
  if (images.length === 0) {
    images = ['/assets/images/dp/Aditya_1.jpg'];
  }

  return <HomeContent images={images} />;
}
