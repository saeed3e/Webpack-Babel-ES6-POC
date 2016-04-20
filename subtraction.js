import { addition } from './addition.js';
export class subtraction extends addition{
  constructor(){
  	super();
    this.y = this.x - 5 ;
  }
}