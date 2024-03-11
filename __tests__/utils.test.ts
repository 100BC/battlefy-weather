import { getTimeOfCalc, toUpper } from '../src/lib/utils';
import { expect, test } from 'vitest';

test('toUpper should properly capitalize letters in a sentence', () => {
  expect(toUpper('hello world')).toEqual('Hello World');
  expect(toUpper('The weather is COLD')).toEqual('The Weather Is COLD');
});

test('getTimeOfCalc', () => {
  expect(getTimeOfCalc(1710124223)).toEqual('2:02 PM');
});
