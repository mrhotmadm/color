<h1 align="center">What is This?</h1>

Easily add colors to messages in the console/terminal.

# Installation

You can download this package by using the command; `npm i @mrhotmadm/sleep`

# Usage

To get started, start by requiring the package and initializing a new class with the .Initialize() method.

```js
const Color = require('@mrhotmadm/color');
const color = new Color.Instance();
```

The colors currently available/included are:

* Red/Background
* Yellow/Background
* Green/Background
* Blue/Background
* Cyan/Background
* Magenta/Background
* White/Background
* Black/Background

For font colors, just call the color as a method

```js
const Color = require('@mrhotmadm/color');
const color = new Color.Instance();

// Red
console.log(
   color.red('This text is red!');
)
```

All examples can be found in the **[examples directory.](https://github.com/mrhotmadm/color/tree/main/examples)**

# LICENSE

The license can be found in the repository as LICENSE. This package uses ANSI colors to add color, which is accessible to anyone. 
So, the source-code is available to anyone for anything, including commercial use, redistribution, modification, and raw copy-paste.

Thanks for downloading!
