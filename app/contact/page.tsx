import ContactContent from './ContactContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Aditya::Portfolio',
  description: 'Get in touch with Aditya Chakma for collaborations or inquiries.',
};

export default function ContactPage() {
  return <ContactContent />;
}
