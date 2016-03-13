import { subtraction } from './content1.js';

export class divide extends subtraction {
  constructor() {
    super();
    this.z = this.x + this.y - 5;
  }
}

var inst = new divide();
console.log(inst)
