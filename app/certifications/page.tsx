import CertificationsContent from './CertificationsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications & Achievements | Aditya::Portfolio',
  description: 'Mathematics Olympiad certificates, online certifications from Coursera (Deep Learning, Machine Learning), and other achievements of Aditya Chakma.',
};

export default function CertificationsPage() {
  return <CertificationsContent />;
}
