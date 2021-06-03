<h1 align="center">What is This?</h1>

This package uses promises to pause execution, similar to Python's `time.sleep()` and Lua's `wait()`.

# Installation

You can download this package by using the command; `npm i @mrhotmadm/sleep`

# Usage

To get started, start by requiring the package and making a new .Instance() class.

```js
const Color = require('@mrhotmadm/color');
const color = new Color.Instance();
```

The colors currently available/included are:

<p style="color:red;">Red/Background</p>
<p style="color:orange;">Orange/Background</p> (actually yellow but looks like orange)
<p style="color:green;">Green/Background</p>
<p style="color:blue;">Blue/Background</p>
<p style="color:cyan;">Cyan/Background</p>
<p style="color:magenta;">Magenta/Background</p>
<p style="color:white;">White/Background</p>
<p style="color:black;">Black/Background</p>

For font colors, just call the color as a method

```js
const Color = require('@mrhotmadm/color');
const color = new Color.Instance();

// Red
console.log(
   color.red('')
)
```

All examples can be found in the **[examples directory.](https://github.com/mrhotmadm/color/tree/main/examples)**

# LICENSE

The license can be found in the repository as LICENSE. This package uses ANSI colors to add color, which is accessible to anyone. 
So, the source-code is available to anyone for anything, including commercial use, redistribution, modification, and raw copy-paste.

Thanks for downloading!
