import {Compte} from './Entities/Compte';
import {CompteService} from './Entities/CompteService';
import {ClientService} from './Entities/ClientService';
import {EmployeService} from './Entities/EmployeService';
import {Employe} from './Entities/Employe';
import {Client} from './Entities/Client';

export class Utils {

  transfoCompteToCompteService(compte:Compte) : CompteService{
    let compService = new CompteService();
      compService._solde=compte.solde;
      compService._codeCompte=compte.codeCompte;
      compService._decouvert=compte.decouvert;
      compService._type=compte.type;
      compService._taux=compte.taux;

      compService._client=this.transfoClientToClientService(compte.client);
      compService._employe=this.transfoEmployeToEmployeService(compte.employe);
    return compService;

  }

  transfoClientToClientService(client:Client) : ClientService{
    let clientService = new ClientService();
    clientService._codeClient=client.codeClient;
    clientService._nomClient=client.nomClient;


    return clientService;

  }

  transfoEmployeToEmployeService(employe:Employe) : EmployeService{
    let employeService = new EmployeService();
    employeService._codeEmploye=employe.codeEmploye;
    employeService._nomEmploye=employe.nomEmploye;

    return employeService;

  }

  transfoCompteServiceToCompte(compteService:CompteService) : Compte{
    let compte = new Compte();
    compte.solde=compteService._solde;
    compte.codeCompte=compteService._codeCompte;
    compte.decouvert=compteService._decouvert;
    compte.type=compteService._type;
    compte.taux=compteService._taux;

    compte.client=this.transfoClientServiceToClient(compteService._client);
    compte.employe=this.transfoEmployeServiceToEmploye(compteService._employe);
    return compte;

  }

  transfoClientServiceToClient(clientService:ClientService) : Client{
    let client = new Client();
    client.codeClient=clientService._codeClient;
    client.nomClient=clientService._nomClient;


    return client;

  }

  transfoEmployeServiceToEmploye(employeService:EmployeService) : Employe{
    let employe = new Employe();
    employe.codeEmploye=employeService._codeEmploye;
    employe.nomEmploye=employeService._nomEmploye;

    return employe;

  }
}
