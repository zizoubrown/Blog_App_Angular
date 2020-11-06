import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  post:any; 
  posts=[]; 
  constructor(private http : HttpClient){

   } 

   ngOnInit(): void { 
    this.http.get('http://127.0.0.1:8000/api/post') 
    .subscribe(Response => {   
      

      this.post=Response; 
      this.posts=this.post; 
      console.log(this.posts)
    }); 
   
  }
  }