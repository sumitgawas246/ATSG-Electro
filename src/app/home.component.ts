import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./app.component.css']
})




export class AppHome {
  title = 'offers';
  constructor (private httpService: HttpClient){ }
  arrItems: string[];
  err: string;

  Init(){
    this.httpService.get('./assets/data.json').subscribe(
      data =>{
        this.arrItems = data as string[];

      },
      (HttpErrorResponse) => {
        console.log();  
      }
    );




  }

}
