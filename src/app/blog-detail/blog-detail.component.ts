import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {


  post:any; 
  posts=[]; 
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/post/{id}') 
    .subscribe(Response => {   
      
      this.post=Response; 
      this.posts=this.post; 
      console.log(this.posts)
    }); 
  }

}
