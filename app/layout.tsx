import type { Metadata } from 'next';
import './globals.css';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://aditya-chakma.github.io'),
  title: 'Aditya::Portfolio',
  description: 'Personal portfolio of Aditya Chakma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
