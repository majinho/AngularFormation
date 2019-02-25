import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {BaseRequestOptions, RequestOptions} from '@angular/http';
import { RequestMethod } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http';
import "rxjs/add/operator/map";
import {Compte} from '../Entities/Compte';
import {utils} from 'protractor';
import {Utils} from '../utils';
import {CompteService} from '../Entities/CompteService';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-restservice',
  templateUrl: './restservice.component.html',
  styleUrls: ['./restservice.component.css']
})

//const headers = new Headers({ 'Content-Type': 'application/json' });

export class RestserviceComponent implements OnInit {
  httpOptions:any;
  utils=new Utils();
  compte={};
  comptesEpargne=[];
  comptesCourant=[];
  headers:any;
  compteFormulaire:Compte=new Compte();
  compteAjoute={"codeCompte":"CC10","solde":30000,"type":"CC","decouvert":3000,"client":{"codeClient":1},"employe":{"codeEmploye":3}};
  options:any;
  typesCompte=[{id:"CC",value:"Compte courant"},{id:"CE",value:"Compte Epargne"}];
  //0:aucun,1:ajouter,2:chercher
  typeBoutonSelectionne:number=0;
  constructor(private http:HttpClient) {
    //this.httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.headers= new HttpHeaders({'Content-Type': 'application/json'});
    this.options = new RequestOptions( {method: RequestMethod.Post, headers: this.headers });
  }

  ngOnInit() {

  }

  boutonChercherCompte(){
    if(this.typeBoutonSelectionne==2){
      this.typeBoutonSelectionne=0;
    }else{
      this.typeBoutonSelectionne=2;
    }
  }

  boutonAjouterCompte(){
    if(this.typeBoutonSelectionne==1){
      this.typeBoutonSelectionne=0;
    }else{
      this.typeBoutonSelectionne=1;
    }
  }
  chercherCompte(typeCompte:string){
    this.http.get("http://localhost:8081/comptes/"+typeCompte)
      .subscribe(data=>{
        this.compte=data;
      })
  }

  chercherComptes(){
    this.boutonChercherCompte();
    this.comptesCourant=[];
    this.comptesEpargne=[];
    this.http.get<Compte[]>("http://localhost:8081/comptes").subscribe(data=>{
      /*
      if(data!=null && data.length>0){
        for(let compteService of data){
          if(compteService._type=="CC"){
            this.comptesCourant.push(this.utils.transfoCompteServiceToCompte(compteService));
          }else{
            if(compteService._type="CE"){
              this.comptesEpargne.push(this.utils.transfoCompteServiceToCompte(compteService));
            }
          }
        }
      }*/
      if(data!=null && data.length>0){
        for(let compte of data){
          if(compte.type=="CC"){
            this.comptesCourant.push(compte);
          }else{
            if(compte.type="CE"){
              this.comptesEpargne.push(compte);
            }
          }
        }
      }
    })

  }

  ajoutCompte(compteForm:any){
      let body = JSON.stringify(this.utils.transfoCompteToCompteService(this.compteFormulaire));
      this.http.post('http://localhost:8081/comptes', body,this.options).subscribe();
  }

  onTypeChange(event){
    console.log(event.target.value);
  }


}
