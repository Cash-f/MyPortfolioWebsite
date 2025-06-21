import './globals.css';
import { Providers } from './providers'; 


export const metadata = {
  title: 'My Portfolio', 
  description: 'Welcome to my professional portfolio showcasing my projects and skills.', 
};


export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <Providers>
        {children}
      </Providers>
    </html>
  );
}