'use client';

import WeatherCard from './WeatherCard';
import { useWeatherStore } from './providers/WeatherStoreProvider';
import { TypographyH2 } from './ui/typography';

const WeatherHistory = () => {
  const { weather } = useWeatherStore((state) => state);

  return (
    <>
      {weather.length > 0 && (
        <>
          <TypographyH2>History</TypographyH2>
          <ol className="space-y-4 w-80">
            {weather.map((w) => (
              <WeatherCard city={w} key={w.id} />
            ))}
          </ol>
        </>
      )}
    </>
  );
};

export default WeatherHistory;
