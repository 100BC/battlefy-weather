import LocationForm from '@/components/LocationForm';
import WeatherHistory from '@/components/WeatherHistory';
import { TypographyH1 } from '@/components/ui/typography';

export default function Home() {
  return (
    <main>
      <TypographyH1>Battlefy Weather</TypographyH1>
      <LocationForm />
      <WeatherHistory />
    </main>
  );
}
