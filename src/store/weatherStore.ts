import { createStore } from 'zustand/vanilla';
import { OpenWeatherAPI } from '../types';

export type WeatherState = {
  weather: OpenWeatherAPI[];
};

export type WeatherActions = {
  addCity: (city: OpenWeatherAPI) => void;
};

export type WeatherStore = WeatherState & WeatherActions;

export const initWeatherStore = (): WeatherState => {
  return { weather: [] };
};

export const defaultWeatherStore: WeatherState = {
  weather: [],
};

const addCity = (state: WeatherState, newCity: OpenWeatherAPI) => {
  const arr = state.weather;
  const indexExist = arr.findIndex((i) => i.id === newCity.id);
  if (indexExist >= 0) {
    arr.splice(indexExist, 1);
  }

  return { weather: [newCity, ...arr] };
};

export const createWeatherStore = (
  initState: WeatherState = defaultWeatherStore
) => {
  return createStore<WeatherStore>()((set) => ({
    ...initState,
    addCity: (newCity) => set((state) => addCity(state, newCity)),
  }));
};
