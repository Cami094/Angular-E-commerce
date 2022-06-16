import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/service/service/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products:any =[];
  allProducts:any=0
getCartDetails:any =[];
  constructor(private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.CardDetails();
    this.cartApi.getProductData().subscribe(res=>{
      this.products=res;
      this.allProducts=this.cartApi.getTotalAmount();
    })
  }
  removeProduct(item:any){
    this.cartApi.removeCartData(item);
  }
getCardDetails:any=[];
CardDetails(){
  if(localStorage.getItem('localCart')){
    this.getCardDetails= JSON.parse('localCart');
    console.log(this.getCardDetails)
  }
}
incont(item:any,quantity:any){
  for (let i=0; i<this.getCardDetails.length;i ++){
    if(this.getCardDetails[i].item=== item){
      this.getCardDetails[i].quantity= parseInt (quantity) + 1;
    }
  }
}

}

