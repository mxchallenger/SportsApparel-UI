import { formatCurrency } from './FormatCurrency';
import { formatActive } from './FormatActive'

describe('formatCurrency', () => {
  it('Converts string input to formatted price string', () => {
    const original = { value: '3.14' };
    const expected = '$3.14';
    expect(formatCurrency(original)).toEqual(expected);
  });

  it('adds 2 decimal places to integer strings', () => {
    const original = { value: '3' };
    const expected = '$3.00';
    expect(formatCurrency(original)).toEqual(expected);
  });
  it('adds 100th to price strings with 10ths', () => {
    const original = { value: '3.8' };
    const expected = '$3.80';
    expect(formatCurrency(original)).toEqual(expected);
  });
});

describe('formatActive', () => {
  it('changes a false value to False string', () => {
    const original = { value: false };
    const expected = 'False';
    expect(formatActive(original)).toEqual(expected);
  });

  it('changes a boolean true value to True string', () => {
    const original = { value: true };
    const expected = 'True';
    expect(formatActive(original)).toEqual(expected);
  });
});
