// Code

function chunk(arr, size = 1) {
  if (!arr.length) return []

  return [arr.slice(0, size), ...chunk(arr.slice(size), size)]
}

// Tests
test('returns a new array of chunks of 1 elements', () => {
  expect(chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
});

test('returns a new array of chunks of 2 elements', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
});

test('returns a new array of chunks of 3 elements', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
});

