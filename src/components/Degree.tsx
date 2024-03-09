import { useMemo } from 'react';

const Degree = ({ temp }: { temp: number }) => {
  const deg = useMemo(() => Math.round(-273.15 + temp), [temp]);

  return <>{deg}&deg;C</>;
};

export default Degree;
