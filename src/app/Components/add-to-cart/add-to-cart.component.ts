import { Component, OnInit } from '@angular/core';
import { faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  faMinusCircle=faMinusCircle;
  faPlusCircle=faPlusCircle;

  quantity:number=1;
  quantityNo =1;
  plus(){
    if(this.quantityNo !=Infinity){
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


  constructor(private router: Router) { 
   



  }
  redirect(){
    this.router.navigate([''])



  }

  ngOnInit(): void {
  }

}
