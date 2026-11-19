export default class LaneNumber {
  private value: number;

  private secret: boolean;

  public constructor() {
    this.value = this.getValue();
    this.secret = false;
  }


  public getValue() : number {
    return this.value;
  }

  public isSecret(): boolean {
    return this.secret;
  }

}
