import {Employe} from './Employe';
import {Client} from './Client';
import {ClientService} from './ClientService';
import {EmployeService} from './EmployeService';

export class CompteService {

  private codeCompte: string;
  private solde: number;
  private type: string;
  private decouvert: number;
  private taux: number;
  private employe: EmployeService;
  private client: ClientService;


  get _codeCompte(): string {
    return this.codeCompte;
  }

  set _codeCompte(value: string) {
    this.codeCompte = value;
  }

  get _solde(): number {
    return this.solde;
  }

  set _solde(value: number) {
    this.solde = value;
  }

  get _type(): string {
    return this.type;
  }

  set _type(value: string) {
    this.type = value;
  }

  get _decouvert(): number {
    return this.decouvert;
  }

  set _decouvert(value: number) {
    this.decouvert = value;
  }

  get _employe(): EmployeService {
    return this.employe;
  }

  set _employe(value: EmployeService) {
    this.employe = value;
  }

  get _client(): ClientService {
    return this.client;
  }

  set _client(value: ClientService) {
    this.client = value;
  }

  get _taux(): number {
    return this.taux;
  }

  set _taux(value: number) {
    this.taux = value;
  }
}
