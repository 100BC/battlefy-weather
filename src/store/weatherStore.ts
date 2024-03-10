import { createStore } from 'zustand/vanilla';
import { OpenWeatherAPI } from '../types';

export type WeatherState = {
  weather: OpenWeatherAPI[];
};

export type WeatherActions = {
  addCity: (city: OpenWeatherAPI) => void;
  addWeather: (weather: OpenWeatherAPI[]) => void;
  removeCity: (cityId: number) => void;
};

export type WeatherStore = WeatherState & WeatherActions;

export const initWeatherStore = (): WeatherState => {
  return { weather: [] };
};

export const defaultWeatherStore: WeatherState = {
  weather: [],
};

const removeCityIndex = (weatherArr: OpenWeatherAPI[], cityId: number) => {
  const arr = weatherArr;
  const indexExist = arr.findIndex((i) => i.id === cityId);
  if (indexExist >= 0) {
    arr.splice(indexExist, 1);
  }

  return arr;
};

export const createWeatherStore = (
  initState: WeatherState = defaultWeatherStore
) => {
  return createStore<WeatherStore>()((set) => ({
    ...initState,
    addWeather: (weather) => {
      set({ weather });
    },
    addCity: (newCity) =>
      set((state) => ({
        weather: [newCity, ...removeCityIndex(state.weather, newCity.id)],
      })),
    removeCity: (cityId) =>
      set((state) => ({ weather: removeCityIndex(state.weather, cityId) })),
  }));
};
