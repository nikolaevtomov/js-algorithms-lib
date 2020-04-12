import { describe, it } from 'mocha';
import { expect } from 'chai';

import { bubbleSort } from './algorithms/bubble-sort';

describe('Algorithms', () => {
  it('Bubble Sort - expect to sort the array of numbers', () => {
    expect(bubbleSort([1, 3, 80, 48, 2])).deep.equal([1, 2, 3, 48, 80]);
  });
});
