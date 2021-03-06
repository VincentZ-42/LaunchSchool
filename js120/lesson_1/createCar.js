function createCar(make, fuelLevel, engineOn) {
  return {
    make: make,
    fuelLevel: fuelLevel,
    engineOn: false,

    startEngine() {
      this.engineOn = true;
    },

    drive() {
      this.fuelLevel -= 0.1;
    },

    stopEngine() {
      this.engineOn = false;
    },

    refuel(percent) {
      if ((this.fuelLevel + (percent / 100)) <= 1) {
        this.fuelLevel += (percent / 100);
      } else {
        this.fuelLevel = 1;
      }
    },
  };
}

let raceCar1 = createCar('BMW', 0.5, false);
console.log(raceCar1.fuelLevel);
raceCar1.drive();
console.log(raceCar1.fuelLevel);

let raceCar2 = createCar('Ferrari', 0.7, true);
console.log(raceCar2.fuelLevel);
raceCar2.drive();
console.log(raceCar2.fuelLevel);