import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info:any;
  comments=[];
  commentaire={
    date:null,message:""

  }
  constructor(private aboutService:AboutService) {
    this.info=aboutService.getInfo();
    this.comments=aboutService.getAllComments();
  }

  ngOnInit() {
  }
onAddCommentaire(commentaire){
    this.aboutService.addComment(commentaire);
    this.commentaire.message="";
}
}
