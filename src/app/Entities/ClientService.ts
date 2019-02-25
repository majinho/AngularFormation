export class ClientService {

  private codeClient:number;
  private nomClient:string;


  get _codeClient(): number {
    return this.codeClient;
  }

  set _codeClient(value: number) {
    this.codeClient = value;
  }


  get _nomClient(): string {
    return this.nomClient;
  }

  set _nomClient(value: string) {
    this.nomClient = value;
  }
}
