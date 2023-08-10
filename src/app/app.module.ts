import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CutomizePizzaComponent } from './Components/cutomize-pizza/cutomize-pizza.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CompleteYourMealComponent } from './Components/complete-your-meal/complete-your-meal.component';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';
import { OrderOnlineComponent } from './Components/order-online/order-online.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TwoPizzaDealsComponent } from './Components/two-pizza-deals/two-pizza-deals.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CutomizePizzaComponent,
    FooterComponent,
    CompleteYourMealComponent,
    AddToCartComponent,
    OrderOnlineComponent,
    OrdersComponent,
    TwoPizzaDealsComponent,
    LoginPageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    AngularTypewriterEffectModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
