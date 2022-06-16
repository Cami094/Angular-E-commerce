import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/service/service/cartapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  totalitemNum: number=0;

  constructor(private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.totalitemNum= res.length;
    })
  }

}
