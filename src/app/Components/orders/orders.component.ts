import { Component, OnInit } from '@angular/core';
import { faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  faMinusCircle=faMinusCircle;
  faPlusCircle=faPlusCircle;

  quantity:number=1;
  quantityNo =1;
  plus(){
    if(this.quantityNo !=5){
      this.quantityNo++;
      this.quantity= this.quantityNo;
    }
  }
  minus(){
    if(this.quantityNo !=1){
      this.quantityNo--;
      this.quantity= this.quantityNo;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


  
}
