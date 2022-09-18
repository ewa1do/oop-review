interface Person {
  fullName: string;
  birthYear: number;
  calcAge(): void;
}

class Person implements Person {
  private _fullName: string;
  private _birthYear: number;

  constructor(fullName: string, birthYear: number) {
    this._fullName = fullName;
    this._birthYear = birthYear;
  }

  set name(name: string) {
    // name = this._fullName;
    if (name.includes(' ')) this._fullName = name;
    else console.error(`${name} is not a fullName`);
  }

  get name() {
    return this._fullName;
  }

  get age() {
    return new Date().getFullYear() - this._birthYear;
  }

  calcAge() {
    console.log(`${this._fullName} has ${2022 - this._birthYear} years old!`);
  }

  public static hey() {
    console.log('Hey there');
  }
}

export default Person;
