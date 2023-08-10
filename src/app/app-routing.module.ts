import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CutomizePizzaComponent } from './Components/cutomize-pizza/cutomize-pizza.component';
import { CompleteYourMealComponent } from './Components/complete-your-meal/complete-your-meal.component';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';
import { OrderOnlineComponent } from './Components/order-online/order-online.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { TwoPizzaDealsComponent } from './Components/two-pizza-deals/two-pizza-deals.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'CutomizePizzaComponent',
    component: CutomizePizzaComponent
  },
  {
    path:'CompleteYourMealComponent',
    component: CompleteYourMealComponent
  },
  {
    path:'AddToCartComponent',
    component: AddToCartComponent
  },
  {
    path: 'OrderOnlineComponent',
    component: OrderOnlineComponent
  },
  {
    path: 'OrdersComponent',
    component: OrdersComponent
  },
  {
    path: 'TwoPizzaDealsComponent',
    component: TwoPizzaDealsComponent
  },
  {
    path: 'LoginPageComponent',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent]
