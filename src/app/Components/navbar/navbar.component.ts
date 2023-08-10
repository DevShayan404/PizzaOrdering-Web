import { Component, OnInit, HostListener  } from '@angular/core';
import { faCartShopping, faBars, faMinusCircle, faPlusCircle, faStar, faCartPlus, faXmarkSquare} from "@fortawesome/free-solid-svg-icons";
// import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faCartShopping = faCartShopping;
  faBars =faBars;
  faMinusCircle=faMinusCircle;
  faPlusCircle=faPlusCircle;
  faStar=faStar;
  faCartPlus=faCartPlus;
  faXmarkSquare= faXmarkSquare;


  navbarFixed:boolean = false;
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 0){
      this.navbarFixed =true;
    }else{
      this.navbarFixed= false;
    }
  } 

  showSidebar=false;
  toggleSidebar(){
  this.showSidebar=! this.showSidebar;
}
onActivate() {
  window.scroll(0,0);

}
redirect(){
  this.router.navigate([''])



}






  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

}
