import { Cloud, CloudRain, Sun, Thermometer } from 'lucide-react';

type Props = {
  weather: string;
};

const WeatherIcon = ({ weather }: Props) => {
  let icon: JSX.Element;

  switch (weather) {
    case 'Clouds':
      icon = <Cloud />;
      break;
    case 'Rain':
      icon = <CloudRain />;
      break;
    case 'Clear':
      icon = <Sun />;
      break;
    default:
      icon = <Thermometer />;
      break;
  }

  return icon;
};

export default WeatherIcon;
