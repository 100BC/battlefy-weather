'use client';

import { useEffect } from 'react';
import WeatherCard from './WeatherCard';
import { useWeatherStore } from './providers/WeatherStoreProvider';
import { TypographyH2 } from './ui/typography';

const WeatherHistory = () => {
  const { weather, addWeather } = useWeatherStore((state) => state);

  useEffect(() => {
    const st = localStorage.getItem('weather');
    if (st) {
      addWeather(JSON.parse(st));
    }
  }, [addWeather]);

  useEffect(() => {
    if (weather.length > 0) {
      localStorage.setItem('weather', JSON.stringify(weather));
    }
  }, [weather]);

  return (
    <>
      {weather.length > 0 && (
        <>
          <TypographyH2>History</TypographyH2>
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
