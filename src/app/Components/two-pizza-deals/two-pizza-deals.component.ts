import { Component, OnInit , HostListener} from '@angular/core';
import { faL, faMinusCircle, faPlusCircle,} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-two-pizza-deals',
  templateUrl: './two-pizza-deals.component.html',
  styleUrls: ['./two-pizza-deals.component.css']
})
export class TwoPizzaDealsComponent implements OnInit {
  faMinusCircle= faMinusCircle;
  faPlusCircle = faPlusCircle;

  constructor() { }

  ngOnInit(): void {
  }

  OrderSummaryFixed:boolean = false;
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 250){
      this.OrderSummaryFixed =true;
      if(window.scrollY > 850){
        this.OrderSummaryFixed= false;
      }
      else{
        this.OrderSummaryFixed= true;
      }
    }else{
      this.OrderSummaryFixed= false;
    }
  }

  quantity:number=1;
  quantityNo =1;
  plus(){
    if(this.quantityNo != Infinity){
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



}
