let readeinStatuOfRobots = {
  title: prompt('First title'),
  autor: prompt('Autor'),
  title1: prompt('Second title'),
  autor1: prompt('Autor'),
  readingStatus: parseInt(prompt('1 for true or 2 for fosle')),
  declareStatus: function () {
    if (this.readingStatus == 1) {
      console.log(
        `Already read "${this.title}" by ${this.autor}. But You still need to read "${this.title1}" by ${this.autor1}`
      );
    } else {
      console.log(`You still need to read "${this.title}" by ${this.autor} and "${this.title1}" by ${this.autor1}.`);
    }
  },
};

readeinStatuOfRobots.declareStatus();
