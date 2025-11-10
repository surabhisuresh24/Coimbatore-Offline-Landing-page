import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CMA USA Bengaluru Campus | Indian Institute of Commerce Lakshya',
  description: 'Join CMA USA offline classes at our Bengaluru campus. Complete your Certified Management Accountant certification in 9-12 months with world-class faculty and proven curriculum.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
