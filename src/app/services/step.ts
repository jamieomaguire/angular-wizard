export class Step {
  public url: string;
  public order: number;

  constructor(url: string, order: number) {
    this.url = url;
    this.order = order;
  }
}
