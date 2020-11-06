import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {


  post:any; 
  posts=[]; 
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/post') 
    .subscribe(Response => {   
      

      this.post=Response; 
      this.posts=this.post; 
      console.log(this.posts)
    }); 
   
  }

}
