import { addition } from './addition.js';
export class multiplication extends addition{
  constructor(){
  	super();
    this.y = this.x * 5 ;
  }
}