import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos:any;
  currentPage:number=1;
  size:number=10;
  totalPages:number;
  pages:Array<number>=[];
  motCle:String;
  constructor(private http:Http) { }

  ngOnInit() {
  }

  onSearch(data){
    this.http.get("https://pixabay.com/api/?key=8218346-e5115b38ce8302633ab4b8b75&q="
                      +data.motCle+"&per_page="+this.size+"&page="+this.currentPage)
      .map(resp=>resp.json())
      .subscribe(data=>{
      this.pagePhotos=data;
      this.totalPages=data.totalHits/this.size;
      if(data.totalHits%this.size>0) ++this.totalPages;
      this.pages=new Array(this.totalPages);
    })

  }
  goToPage(index){
    this.currentPage=index+1;
    this.onSearch({motCle:this.motCle});
  }
}
