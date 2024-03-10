import { OpenWeatherAPI } from '@/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Degree from './Degree';
import { useMemo, useState } from 'react';
import { getTimeOfCalc, toUpper } from '@/lib/utils';
import { Loader2, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { fetchWeather } from '@/lib/openWeatherApi';
import { useWeatherStore } from './providers/WeatherStoreProvider';
import { useToast } from './ui/use-toast';
import WeatherIcon from './WeatherIcon';

type Props = {
  city: OpenWeatherAPI;
};

const WeatherCard = ({ city }: Props) => {
  const { toast } = useToast();
  const [refreshing, setRefreshing] = useState(false);
  const { addCity } = useWeatherStore((state) => state);
  const { sys, name, main: temp, weather, dt } = city;
  const weatherDesc = useMemo(
    () => toUpper(weather[0]?.description || ''),
    [weather]
  );
  const updatedAt = useMemo(() => getTimeOfCalc(dt * 1000), [dt]);

  async function handleRefresh() {
    setRefreshing(true);
    const weatherData = await fetchWeather(`${name}, ${sys.country}`);
    if ('errors' in weatherData) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong!',
        description:
          'There was a problem refreshing the weather. Please try again later.',
      });
    } else if (weatherData.dt === dt) {
      toast({
        description: `Already showing the latest weather for ${name}`,
      });
    } else {
      addCity(weatherData);
    }
    setRefreshing(false);
  }

  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>
          {name}, {sys.country}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <ol className="space-y-1">
          <li className="text-3xl font-bold flex justify-center gap-1 items-center">
            <WeatherIcon weather={weather[0].main} icon={weather[0].icon} />
            <Degree temp={temp.temp} />
          </li>
          <li>{weatherDesc}</li>
          <li className="text-gray-500 text-sm">
            Feels like <Degree temp={temp.feels_like} />
          </li>
          <li className="text-gray-500 text-sm">
            <Degree temp={temp.temp_min} /> / <Degree temp={temp.temp_max} />
          </li>
        </ol>
      </CardContent>
      <CardFooter className="text-gray-500 justify-center p-0">
        <Button
          variant="ghost"
          className="text-xs"
          size="sm"
          type="button"
          onClick={handleRefresh}
          disabled={refreshing}
          aria-disabled={refreshing}
        >
          {refreshing ? (
            <Loader2 className="mx-auto h-4 w-4 animate-spin" />
          ) : (
            <>
              <RefreshCw className="mr-2 w-4 h-4" /> Updated at&nbsp;
              <time>{updatedAt}</time>
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WeatherCard;
