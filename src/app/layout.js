import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../css/fonts.css';
import '../css/style.css';

export const metadata = {
  title: 'AMX UAV Technologies',
  description: 'Compact eVTOL Drone and Aerial Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          precedence="default"
        />
      </head>
      <body 
        className="homepage-body"
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        suppressHydrationWarning={true}
      >
        <Navbar />
        
        <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}