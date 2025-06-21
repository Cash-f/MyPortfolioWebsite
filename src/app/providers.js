'use client'; 

import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';


const ovoFont = localFont({
  src: './fonts/Ovo.woff', 
  display: 'swap',
  variable: '--font-ovo',
});

export function Providers({ children }) {
  return (
    
    <body className={ovoFont.className}> 
    
      {children}
      <Analytics />
    </body>
  );
}