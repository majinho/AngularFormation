import {EmployeService} from './EmployeService';
import {ClientService} from './ClientService';
import {Employe} from './Employe';
import {Client} from './Client';

export class Compte {

  private _codeCompte:string;
  private _solde:number;
  private _type:string;
  private _decouvert:number;
  private _taux:number;
  private _employe:Employe=new Employe();
  private _client:Client=new Client();


  get codeCompte(): string {
    return this._codeCompte;
  }

  set codeCompte(value: string) {
    this._codeCompte = value;
  }

  get solde(): number {
    return this._solde;
  }

  set solde(value: number) {
    this._solde = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get decouvert(): number {
    return this._decouvert;
  }

  set decouvert(value: number) {
    this._decouvert = value;
  }

  get employe(): Employe {
    return this._employe;
  }

  set employe(value: Employe) {
    this._employe = value;
  }


  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get taux(): number {
    return this._taux;
  }

  set taux(value: number) {
    this._taux = value;
  }
}
