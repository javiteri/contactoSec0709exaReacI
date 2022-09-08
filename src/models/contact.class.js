import { LEVELS } from './levels.enum';

export class Contact {
  name = '';
  last_name='';
  num_movil='';
  estate=Boolean;
  level = LEVELS.NORMAL;

  constructor(name, last_name, num_movil, estate, level) {
    this.name = name;
    this.last_name = last_name;
    this.num_movil = num_movil;
    this.estate = estate;
    this.level = level;
  } 
}
