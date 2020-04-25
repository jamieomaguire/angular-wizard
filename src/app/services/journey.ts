import { Step } from './step';

export class Journey {
  public id: string;
  public type: string;
  public steps: Step[];

  constructor(id: string, type: string, steps: Step[]){
    this.id = id;
    this.type = type;
    this.steps = steps;
  }
}
