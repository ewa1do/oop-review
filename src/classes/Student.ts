import Person from './Person';

interface Student {
  course: string;
}

class Student extends Person implements Student {
  private _course: string;

  constructor(fullName: string, birthYear: number, course: string) {
    super(fullName, birthYear);

    this._course = course;
  }

  public introduce() {
    return `Hello There! my name is ${this.name}, I'm ${this.age} and I'm coursing ${this._course} `;
  }
}

export default Student;
