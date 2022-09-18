import Car from './classes/Car';
import Person from './classes/Person';
import Student from './classes/Student';

const jessica = new Person('Jessica', 1997);
jessica.fullName = 'Jessica Jones';
// jessica.calcAge();

const ford = new Car('Ford', 120);

console.log(ford);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
ford.brake();

console.log((ford.speedUS = 250));

console.log(ford);

const martha = new Student('Martha Wayne', 2002, 'Computer Science');

console.log(martha.introduce());
