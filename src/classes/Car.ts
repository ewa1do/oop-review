/*
    1. Re-create challenge 1, but this time using an ES6 class;
    2. Add a getter called 'speedUS' which returns the current speed
    in mi/h (divide by 1.6)
    3. Add a setter called 'speedUS' which sets the current speed in mi/h
    (but converts it to km/h before storing the value by multiplying the input by 1.6);
    4. Create a new car and experiment with the accelerate and break methods, and with
    the getter and setter
    Data Car 1: 'Ford' going at 120 km/h
*/

interface Car {
  make: string;
  speed: number;
  // accelerate: (speed: number) => number;
  // brake: (speed: number) => string;
}

class Car implements Car {
  private _make: string;
  private _speed: number;

  constructor(make: string, speed: number) {
    this._make = make;
    this._speed = speed;
  }

  get speedUS() {
    return this._speed / 1.6;
  }

  set speedUS(speed: number) {
    this._speed = speed * 1.6;
  }

  public accelerate(): number {
    return (this._speed += 10);
  }

  public brake(): number {
    return (this._speed -= 5);
  }
}

export default Car;
