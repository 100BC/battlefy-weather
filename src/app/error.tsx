'use client';

import { TypographyH1 } from '@/components/ui/typography';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <main>
      <TypographyH1>Something went wrong!</TypographyH1>
      <b className="text-red-500 text-xl">{error.message}</b>
    </main>
  );
}
