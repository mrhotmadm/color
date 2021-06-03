const Black = "\x1b[30m"
const Red = "\x1b[31m"
const Green = "\x1b[32m"
const Orange = "\x1b[33m"
const Blue = "\x1b[34m"
const Magenta = "\x1b[35m"
const Cyan = "\x1b[36m"
const White = "\x1b[37m"

const BgBlack = "\x1b[40m";
const BgRed = "\x1b[41m";
const BgGreen = "\x1b[42m";
const BgOrange = "\x1b[43m";
const BgBlue = "\x1b[44m";
const BgMagenta = "\x1b[45m";
const BgCyan = "\x1b[46m";
const BgWhite = "\x1b[47m";

const Escape = "\x1b[0m";

class ColorInstance {
  // Font Colors
  red(text) {
    return Red + text + Escape;
  }

  black(text) {
    return Black + text + Escape;
  }

  green(text) {
    return Green + text + Escape;
  }

  orange(text) {
    return Orange + text + Escape;
  }

  blue(text) {
    return Blue + text + Escape;
  }

  magenta(text) {
    return Magenta + text + Escape;
  }

  cyan(text) {
    return Cyan + text + Escape;
  }

  white(text) {
    return White + text + Escape;
  }

  // Background Colors
  redBg(text) {
    return BgRed + text + Escape;
  }

  blackBg(text) {
    return BgBlack + text + Escape;
  }

  greenBg(text) {
    return BgGreen + text + Escape;
  }

  orangeBg(text) {
    return BgOrange + text + Escape;
  }

  blueBg(text) {
    return BgBlue + text + Escape;
  }

  magentaBg(text) {
    return BgMagenta + text + Escape;
  }

  cyanBg(text) {
    return BgCyan + text + Escape;
  }

  whiteBg(text) {
    return White + text + Escape;
  }
}

module.exports.Instance = ColorInstance;