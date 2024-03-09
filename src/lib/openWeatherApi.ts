'use server';

import { OpenWeatherAPI } from '@/types';

// Effectively a proxy to hide the Open Weather API key from the browser
export async function fetchWeather(location: string) {
  // Ideally the fetch will first try to find a cache from a db like Redis
  // to avoid hitting the API key multiple times
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );

    if (data.ok) {
      return data.json() as Promise<OpenWeatherAPI>;
    } else {
      // A 400 doesn't throw an error, so we throw it instead
      throw 'No city found';
    }
  } catch (err) {
    return {
      errors: err,
    };
  }
}
