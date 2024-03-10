'use client';

import { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import { useWeatherStore } from './providers/WeatherStoreProvider';
import { TypographyH2 } from './ui/typography';

const WeatherHistory = () => {
  const [loadedLS, setLoadedLS] = useState(false);
  const { weather, addWeather } = useWeatherStore((state) => state);

  useEffect(() => {
    const st = localStorage.getItem('weather');
    if (st) {
      addWeather(JSON.parse(st));
    }
    setLoadedLS(true);
  }, [addWeather]);

  // Need to use loadedLS to initially load LocalStorage and not overwrite
  // the data in LocalStorage. {weather.length} listed as dependency otherwise
  // deleting a city from weather will not update the LocalStorage
  useEffect(() => {
    if (loadedLS) {
      localStorage.setItem('weather', JSON.stringify(weather));
    }
  }, [weather, weather.length, loadedLS]);

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
