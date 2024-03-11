import { beforeAll, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import { WeatherStoreProvider } from '../src/components/providers/WeatherStoreProvider';

describe('Home', () => {
  beforeAll(() => {
    render(
      <WeatherStoreProvider>
        <Home />
      </WeatherStoreProvider>
    );
  });

  test('Should render h1', () => {
    expect(screen.getByText('Battlefy Weather')).toBeDefined();
  });

  test('Should have Form', () => {
    expect(screen.getByLabelText('City')).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'City' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Search' })).toBeDefined();
  });
});
