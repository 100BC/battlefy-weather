import Degree from '@/components/Degree';
import WeatherIcon from '@/components/WeatherIcon';
import { TypographyH1 } from '@/components/ui/typography';
import { toUpper } from '@/lib/utils';
import { OpenWeatherAPI } from '@/types';
import Link from 'next/link';

type Props = {
  params: {
    country: string;
    city: string;
  };
};

async function getData({ params }: Props) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${params.city},${params.country}&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );

  if (data.ok) {
    return data.json() as Promise<OpenWeatherAPI>;
  } else {
    throw new Error('No city found');
  }
}

export default async function Page({ params }: Props) {
  const data = await getData({ params });
  const { name: city, sys, main: temp, weather, wind } = data;

  const weatherData = {
    'Feels Like': <Degree temp={temp.feels_like} />,
    'Min/Max': (
      <>
        <Degree temp={temp.temp_min} /> / <Degree temp={temp.temp_max} />
      </>
    ),
    Pressure: `${temp.pressure}hPa`,
    Humidity: `${temp.humidity}%`,
    Wind: (
      <>
        <span
          className="inline-block"
          style={{ transform: `rotate(${wind.deg}deg)` }}
        >
          &#8593;
        </span>{' '}
        {wind.speed}m/s
      </>
    ),
  };

  return (
    <main className="relative">
      <header className="absolute top-2 left-2">
        <nav>
          <Link href="/" className="font-bold hover:underline text-xl">
            Battlefy Weather
          </Link>
        </nav>
      </header>
      <TypographyH1>
        {city}, {sys.country}
      </TypographyH1>
      <div className="text-center">
        <div className="grid grid-cols-2 items-center gap-2 text-6xl font-bold">
          <WeatherIcon
            weather={weather[0].main}
            icon={weather[0].icon}
            size={120}
          />
          <Degree temp={temp.temp} />
        </div>
        <p className="text-4xl text-slate-700">
          {toUpper(weather[0].description)}
        </p>
      </div>
      <ul className="text-lg max-w-sm w-full">
        {Object.entries(weatherData).map((e) => (
          <li
            key={e[0]}
            className="flex justify-between gap-4 border-b-2 hover:bg-slate-100 p-2"
          >
            <b>{e[0]}:</b>
            <span>{e[1]}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
