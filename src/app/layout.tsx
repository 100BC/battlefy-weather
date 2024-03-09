import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WeatherStoreProvider } from '@/components/providers/WeatherStoreProvider';

const inter = Inter({ subsets: ['latin'] });

// TODO update meta tags
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WeatherStoreProvider>{children}</WeatherStoreProvider>
      </body>
    </html>
  );
}
