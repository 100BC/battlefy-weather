import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Degree from '../src/components/Degree';

describe('Degree Component', () => {
  test('Should display correct positive temperature', () => {
    render(<Degree temp={283.15} />);
    expect(screen.getByText('10°C'));
  });
  test('Should display correct negative temperature', () => {
    render(<Degree temp={263.15} />);
    expect(screen.getByText('-10°C'));
  });
  test('Should display 0deg correctly', () => {
    render(<Degree temp={273.15} />);
    expect(screen.getByText('0°C'));
  });
});
