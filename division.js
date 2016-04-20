import { addition } from './addition.js';

export class division extends addition{
  constructor(){
  	super();
    this.y = this.x / 5 ;
  }
}