const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render method', () => {
  const triangle = new Triangle();
  triangle.setColor("blue");
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle render method', () => {
  const circle = new Circle();
  circle.setColor("red");
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square render method', () => {
  const square = new Square();
  square.setColor("green");
  expect(square.render()).toEqual('<rect x="60" y="60" width="180" height="180" fill="green" />');
});

