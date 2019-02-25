export class Client {

  private _codeClient:number;
  private _nomClient:string;


  get codeClient(): number {
    return this._codeClient;
  }

  set codeClient(value: number) {
    this._codeClient = value;
  }


  get nomClient(): string {
    return this._nomClient;
  }

  set nomClient(value: string) {
    this._nomClient = value;
  }
}
