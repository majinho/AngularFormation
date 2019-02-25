
export class EmployeService {

  private codeEmploye:number;
  private nomEmploye:string;

  get _codeEmploye(): number {
    return this.codeEmploye;
  }

  set _codeEmploye(value: number) {
    this.codeEmploye = value;
  }


  get _nomEmploye(): string {
    return this.nomEmploye;
  }

  set _nomEmploye(value: string) {
    this.nomEmploye = value;
  }
}
