import localFont from 'next/font/local';
import './globals.css';



const ovoFont = localFont({
  src: './fonts/Ovo.woff',
  display: 'swap',
  variable: '--font-ovo',
});

export const metadata = {
  title: 'Your Portfolio',
  description: 'Your Description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ovoFont.variable}>
      <body className="font-ovo">{children}</body>
    </html>
  );
}