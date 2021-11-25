class Banner {
  constructor(message) {
    this.message = message;
    this.width = message.length + 2;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+${'-'.repeat(this.width)}+`;
  }

  emptyLine() {
    return `|${' '.repeat(this.width)}|`;
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
let banner2 = new Banner('');
banner2.displayBanner();