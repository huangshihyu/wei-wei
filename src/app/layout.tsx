import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Sidebar } from '@/components/layout/sidebar';
import { Footer } from '@/components/layout/footer';
import { StoreProvider } from '@/store/provider';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyPortfolio',
  description: '個人作品集與部落格',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className={geist.className}>
        <StoreProvider>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6">{children}</main>
          </div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
