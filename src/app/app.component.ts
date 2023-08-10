import { Component } from '@angular/core';
import { faCartPlus, faTruck, faShop, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PizzaOrderingWeb';
  faCartPlus=faCartPlus
  faTruck=faTruck
  faShop=faShop
  faLocationArrow=faLocationArrow

  loader=true;

  onActivate() {
    window.scroll(0,0);
 
 }
 Modal=true
 modal(){
  this.Modal= false;
 }
  
constructor( ){}

 
 ngOnInit(): void {
   setTimeout(() => {
     this.loader = false
    }, 2500);
 }
 
 

}
