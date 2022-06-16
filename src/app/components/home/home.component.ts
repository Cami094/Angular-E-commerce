import {Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/service/service/api.service';

import { CartapiService } from 'src/app/service/service/cartapi.service';
import {Router} from "@angular/router";

@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  products:any =[];
  allProducts:any=0;
  producList: any;
myImage:string="assets/img/Love Shopping.jpg"
  constructor(private apiservice: ApiService,
              private carapiService: CartapiService,
              private router:Router) {
  }

  ngOnInit() {
    this.apiservice.getProduct().subscribe( res =>{
      this.producList=res;
      this.producList.forEach((a:any) =>{
        Object.assign(a,{quantity:1,total:a.price})

      });
    })
  }



  }
