import { ReactNode } from 'react';

type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export function TypographyH1({ children, className = '' }: TypographyProps) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className = '' }: TypographyProps) {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
}
