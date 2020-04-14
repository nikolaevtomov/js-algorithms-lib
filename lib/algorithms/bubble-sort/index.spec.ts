import { describe, it } from 'mocha';
import { expect } from 'chai';

import { bubbleSort } from './index';
import { bubbleSortOptimalized } from './optimalized';

describe('Bubble Sort', () => {
  it('Basic - expect to sort the array of numbers', () => {
    expect(bubbleSort([100, 3, 80, 48, 2, 1])).deep.equal([
      1,
      2,
      3,
      48,
      80,
      100,
    ]);
  });

  it('Optimalized - expect to sort the array of numbers', () => {
    expect(bubbleSortOptimalized([100, 3, 80, 48, 2, 1])).deep.equal([
      1,
      2,
      3,
      48,
      80,
      100,
    ]);
  });
});
