import './globals.css';
import { Providers } from './providers'; 
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata = {
  title: 'My Portfolio', 
  description: 'Welcome to my professional portfolio showcasing my projects and skills.', 
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }, 
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png', 
  },
  manifest: '/site.webmanifest', 
  themeColor: '#ffffff', 
  msApplicationTileColor: '#da532c', 
};
  



export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <SpeedInsights/>
      <Providers>
        {children}
      </Providers>
    </html>
  );
}