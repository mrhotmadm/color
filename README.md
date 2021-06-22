<h1 align="center"><a href="https://npmjs.org/package/@mrhotmadm/color">@mrhotmadm/<strong>color</strong></a></h1>

<p align="center">Easily add colors to messages in the console/terminal.</p>

# Installation

You can download this package by using the command; `npm i @mrhotmadm/color`

# Usage

All examples can be found in the <a href="https://github.com/mrhotmadm/color/tree/main/examples" target="_blank"><strong>examples directory.</strong></a>

To get started, make a variable and require the package. Then, make a new instance of the package with the `.Initialize()` method.

```js
const Color = require('@mrhotmadm/color');
const color = new Color.Instance();
```

The colors currently available/included are:

![Current Colors](/images/colors.png)

For font colors, just call the color as a method

```js
const Color = require('@mrhotmadm/color');
const color = new Color.Instance();

// All Colors
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
```
Result:

![wad](/images/color-output.png)

As for background colors, it's the same thing, just append `Bg` at the end of the method name.

```js
const Color = require('@mrhotmadm/color');
const color = new Color.Instance();

// All Background Colors
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
```
Result:

![wad](/images/bg-output.png)

# LICENSE

The license can be found in the repository as LICENSE. This package uses ANSI colors to add color, which is accessible to anyone. 
So, the source-code is available to anyone for anything, including commercial use, redistribution, modification, and raw copy-paste.

Thanks for downloading!
