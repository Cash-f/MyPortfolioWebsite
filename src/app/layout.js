'use client'; 

import localFont from 'next/font/local';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Your Portfolio',
  description: 'Welcome to my professional portfolio showcasing my projects and skills.',
};

const ovoFont = localFont({
  src: './fonts/Ovo.woff',
  display: 'swap',
  variable: '--font-ovo',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ovoFont.variable}> 
      <body className="font-ovo">
        {children}
        <Analytics />
      </body>
    </html>
  );
}