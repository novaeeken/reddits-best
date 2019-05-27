import getDotNotation from '../helpers/getDotNotation';

test('converts 24307 to 24.307', () => {
  expect(getDotNotation(24307)).toBe('24.307');
});
test('converts 22206671 to 22.206.671', () => {
  expect(getDotNotation(22206671)).toBe('22.206.671');
});
test('converts 2293383 to 2.293.383', () => {
  expect(getDotNotation(2293383)).toBe('2.293.383');
});
