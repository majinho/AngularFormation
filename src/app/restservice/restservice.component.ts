import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {BaseRequestOptions, RequestOptions} from '@angular/http';
import { RequestMethod } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http';
import "rxjs/add/operator/map";


@Component({
  selector: 'app-restservice',
  templateUrl: './restservice.component.html',
  styleUrls: ['./restservice.component.css']
})

//const headers = new Headers({ 'Content-Type': 'application/json' });

export class RestserviceComponent implements OnInit {
  httpOptions:any;
  compte={};
  headers:any;
  compteAjoute={"codeCompte":"CC10","solde":30000,"type":"CC","decouvert":3000,"client":{"codeClient":1},"employe":{"codeEmploye":3}};
  options:any;
  constructor(private http:HttpClient) {
    //this.httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.headers= new HttpHeaders({'Content-Type': 'application/json'});
    this.options = new RequestOptions( {method: RequestMethod.Post, headers: this.headers });
  }

  ngOnInit() {

  }

  chercherCompte(){
    this.http.get("http://localhost:8080/comptes/CC1")
      .subscribe(data=>{
        this.compte=data;
      })
  }
  ajoutCompte(){
      let body = JSON.stringify(this.compteAjoute);
      this.http.post('http://localhost:8080/comptes', body,this.options).subscribe();
          }


}
