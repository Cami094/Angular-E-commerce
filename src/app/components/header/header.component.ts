import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/service/api.service';
import { CartapiService } from 'src/app/service/service/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 producList: any;


  constructor (private api:ApiService,
    private cartApi: CartapiService) { }

  ngOnInit(): void {
this.api.getProduct().subscribe(res=>{
  this.producList=res;
  this.producList.forEach((a:any) =>{
    Object.assign(a,{quantity:1,total:a.price})

  })
})
  }
  addtoCart(item:any){
    this.cartApi.addTocart(item);

  }

}
