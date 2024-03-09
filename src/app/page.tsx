import LocationForm from '@/components/LocationForm';
import WeatherHistory from '@/components/WeatherHistory';
import { TypographyH1 } from '@/components/ui/typography';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-8">
      <TypographyH1>Battlefy Weather</TypographyH1>
      <LocationForm />
      <WeatherHistory />
    </main>
  );
}
