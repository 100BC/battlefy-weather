import Image from 'next/image';

type Props = {
  weather: string;
  icon: string;
};

const WeatherIcon = ({ weather, icon }: Props) => {
  return (
    <Image
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={weather}
      width={48}
      height={48}
    />
  );
};

export default WeatherIcon;
