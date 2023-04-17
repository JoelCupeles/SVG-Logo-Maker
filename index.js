import('inquirer').then(async ({ default: inquirer }) => {
    const fs = require('fs');
    const { Triangle, Circle, Square } = require('./lib/shapes');
  

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo text:',
      validate: input => input.length <= 3
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for your logo:',
      choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    }
  ];

  inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  let ShapeClass;

  switch (shape) {
    case 'Triangle':
      ShapeClass = Triangle;
      break;
    case 'Circle':
      ShapeClass = Circle;
      break;
    case 'Square':
      ShapeClass = Square;
      break;
  }

  const shapeInstance = new ShapeClass();
  shapeInstance.setColor(shapeColor);

  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
    ${shapeInstance.render()}
    <rect x="90" y="70" width="120" height="50" fill="white" />
    <text x="150" y="100" text-anchor="middle" font-size="36" fill="${textColor}">${text}</text>
  </svg>
`;

  fs.writeFileSync('logo.svg', svgContent.trim());
  console.log('Generated logo.svg');
});
});





