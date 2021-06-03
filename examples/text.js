const Color = require('../src/index.js');
const color = new Color.Instance();

console.log(
  color.red("Red!"),
  color.orange("Orange!"),
  color.green("Green!"),
  color.blue("Blue!"),
  color.cyan("Cyan!"),
  color.magenta("Magenta!"),
  color.white('White!'),
  color.black('Black!')
);