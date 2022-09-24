const add = (a, b) => {
  return a + b;
};
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should say hello to a provided name', () => {
  const result = generateGreeting('Adam');
  expect(result).toBe('Hello Adam!');
});

test('should say hello to anonymous when no name is provided', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});
