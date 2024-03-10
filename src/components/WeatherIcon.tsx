import Image from 'next/image';

type Props = {
  weather: string;
  icon: string;
  size?: number;
};

const WeatherIcon = ({ weather, icon, size = 48 }: Props) => {
  return (
    <Image
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={weather}
      width={size}
      height={size}
    />
  );
};

export default WeatherIcon;
