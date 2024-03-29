import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WeatherStoreProvider } from '@/components/providers/WeatherStoreProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Battlefy Weather',
  description: 'Find weather for your city',
  robots: 'noindex',
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
        <Toaster />
      </body>
    </html>
  );
}
