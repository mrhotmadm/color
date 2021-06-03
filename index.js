class ColorInstance {
  constructor(text) {
    this.text = text;
  }

  red() {
    return `\x1b[31m${text}`;
  }
}

module.exports = ColorInstance;