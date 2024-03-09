// https://docs.pmnd.rs/zustand/guides/nextjs

'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';

import {
  type WeatherStore,
  createWeatherStore,
  initWeatherStore,
} from '@/store/weatherStore';

export const WeatherStoreContext = createContext<StoreApi<WeatherStore> | null>(
  null
);

export interface WeatherStoreProviderProps {
  children: ReactNode;
}

export const WeatherStoreProvider = ({
  children,
}: WeatherStoreProviderProps) => {
  const storeRef = useRef<StoreApi<WeatherStore>>();
  if (!storeRef.current) {
    storeRef.current = createWeatherStore(initWeatherStore());
  }

  return (
    <WeatherStoreContext.Provider value={storeRef.current}>
      {children}
    </WeatherStoreContext.Provider>
  );
};

export const useWeatherStore = <T,>(
  selector: (store: WeatherStore) => T
): T => {
  const weatherStoreContext = useContext(WeatherStoreContext);

  if (!weatherStoreContext) {
    throw new Error(`useWeatherStore must be use within WeatherStoreProvider`);
  }

  return useStore(weatherStoreContext, selector);
};
