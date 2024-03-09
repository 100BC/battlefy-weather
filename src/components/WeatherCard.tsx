import { OpenWeatherAPI } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Degree from './Degree';
import { useMemo } from 'react';
import { getTimeOfCalc, toUpper } from '@/lib/utils';

type Props = {
  city: OpenWeatherAPI;
};

const WeatherCard = ({ city }: Props) => {
  const { sys, name, main: temp, weather, dt } = city;
  const weatherDesc = useMemo(
    () => toUpper(weather[0]?.description || ''),
    [weather]
  );
  const updatedAt = useMemo(() => getTimeOfCalc(dt * 1000), [dt]);

  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>
          {name}, {sys.country}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <ol className="space-y-1">
          <li className="text-3xl font-bold">
            <Degree temp={temp.temp} />
          </li>
          <li>{weatherDesc}</li>
          <li className="text-gray-500 text-sm">
            <Degree temp={temp.temp_min} /> / <Degree temp={temp.temp_max} />
          </li>
          <li className="text-gray-500 text-sm">
            Feels like <Degree temp={temp.feels_like} />
          </li>
        </ol>
      </CardContent>
      <CardFooter className="text-gray-500 justify-center text-xs p-0">
        Updated at&nbsp;<time>{updatedAt}</time>
      </CardFooter>
    </Card>
  );
};

export default WeatherCard;
