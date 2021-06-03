const Color = require('../src/index.js');
const color = new Color.Instance();

console.log(
  color.redBg("Red!"),
  color.orangeBg("Orange!"),
  color.greenBg("Green!"),
  color.blueBg("Blue!"),
  color.cyanBg("Cyan!"),
  color.magentaBg("Magenta!"),
  color.whiteBg('White!'),
  color.blackBg('Black!')
);