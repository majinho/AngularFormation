import {Injectable} from '@angular/core';

@Injectable()
export class AboutService{
  private info={
    nom:"Majino",
    email:"amine.majdoul@gmail.com",
    tel:"0666666666"
  }
 private comments=[
    {date:new Date(), message:"A"},
    {date:new Date(), message:"B"},
    {date:new Date(), message:"C"}
  ];

  addComment(c){
    c.date=new Date();
    this.comments.push(c);
  }
  getAllComments(){
    return this.comments;
  }
  getInfo(){
    return this.info;
  }
}
