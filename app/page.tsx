import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Aditya Chakma | Senior Full-Stack & Systems Engineer',
  description: 'Personal portfolio of Aditya Chakma, Senior Full-Stack Software Engineer with 5+ years of experience specializing in high-throughput backend architectures, DevOps, and autonomous agentic AI SDLC systems.',
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
  return <HomeContent />;
}
