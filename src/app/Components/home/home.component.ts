import { Component, OnInit, HostListener } from '@angular/core';
import { faCartShopping, faBars, faMinusCircle, faPlusCircle, faStar, faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  faCartShopping = faCartShopping;
  faBars =faBars;
  faMinusCircle=faMinusCircle;
  faPlusCircle=faPlusCircle;
  faStar=faStar;
  faCartPlus=faCartPlus;

  title = 'angularTests';
  list = ['Pls Call Us At +1(905)839-6969 For Order.' , 'Address: 893 Bayly St, Pickering, Canada. ']

  navbarFixed:boolean = false;
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 0){
      this.navbarFixed =true;
    }else{
      this.navbarFixed= false;
    }
  } 

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

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    // autoHeight: true,
    // autoWidth: true,
    // Width:100/3%,
    navSpeed: 700,
    margin: 30,
    nav: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    
  }

  constructor() {
   }

  ngOnInit(): void {
    
  }

}
