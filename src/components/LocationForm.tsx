'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { fetchWeather } from '@/lib/openWeatherApi';
import { useState } from 'react';
import { useWeatherStore } from './providers/WeatherStoreProvider';

const formSchema = z.object({
  location: z.string(),
});

const LocationForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const { addCity } = useWeatherStore((state) => state);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    const weatherData = await fetchWeather(values.location);

    if ('errors' in weatherData) {
      form.setError('location', { message: String(weatherData.errors) });
    } else {
      form.reset();
      addCity(weatherData);
    }
    setSubmitting(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-screen-md mx-auto"
      >
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="New York, US" {...field} />
              </FormControl>
              <FormDescription>
                Enter the city with an optional country code
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={submitting}
          aria-disabled={submitting}
          className="min-w-20"
        >
          {submitting ? (
            <Loader2 className="mx-auto h-4 w-4 animate-spin" />
          ) : (
            'Search'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LocationForm;
