
export class Employe {

  private _codeEmploye:number;
  private _nomEmploye:string;

  get codeEmploye(): number {
    return this._codeEmploye;
  }

  set codeEmploye(value: number) {
    this._codeEmploye = value;
  }


  get nomEmploye(): string {
    return this._nomEmploye;
  }

  set nomEmploye(value: string) {
    this._nomEmploye = value;
  }
}
