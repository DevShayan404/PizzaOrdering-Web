import { Component, OnInit,HostListener } from '@angular/core';
import { faL, faMinusCircle, faPlusCircle,} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-cutomize-pizza',
  templateUrl: './cutomize-pizza.component.html',
  styleUrls: ['./cutomize-pizza.component.css']
})
export class CutomizePizzaComponent implements OnInit {
  faMinusCircle= faMinusCircle;
  faPlusCircle = faPlusCircle;
  
  constructor() { 

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


  pizzaSauce:any=[];
  pizzaSize:any=[];
  pizzaCheese:any=[];
  pizzaSizecheese:any=[]
  ngOnInit(): void {

   this.pizzaSauce = [
    {
      "Id" : 1,
      "Description" : "Pizzaiolo Tomato Suace"

    },
    {
      "Id" : 2,
      "Description" : "Truffle Oil"
    },
    {
      "Id" : 3,
      "Description" : "BBQ Sauce (Contains gluten)"
    }
   ]

   this.pizzaSize = [
    {
      "Id" : 1,
      "Size" : "Regular"

    },
    {
      "Id" : 2,
      "Size" : "Light"
    },
    {
      "Id" : 3,
      "Size" : "Double"
    },
    {
      "Id" : 4,
      "Size" : "Extra"
    }
   ]

  this.pizzaCheese = [
    {
      "Id" : 1,
      "Description" : "Mozzarella Cheese"

    },
    {
      "Id" : 2,
      "Description" : "Feta Cheese"
    },
    {
      "Id" : 3,
      "Description" : "Goat Cheese"
    }
   ]
   
  }





pizzaSide:any=[]
selcetPizzaToppingCheese:any=[];
  selectedCheese:any=[]
  customizeCheckBoxCheese(cheese:any ,index:any){
    this.selectedCheese[index] =cheese.Description;
    // console.log(this.selectedCheese[index]);
    
    

    if( this.selcetPizzaToppingCheese[index] == false ||  this.selcetPizzaToppingCheese[index] == null){

      this.selcetPizzaToppingCheese[index] = true
    }
    else{
      this.selcetPizzaToppingCheese[index] = false
      if( this.selcetPizzaToppingCheese[index] == false){
        let indexForLeftDelete = this.leftSideSelectedCheese.findIndex((x: any) => x.description == cheese.Description);
        if (indexForLeftDelete != '-1'){
          this.leftSideSelectedCheese.splice(indexForLeftDelete, 1);
        }
        let indexForwholeDelete = this.wholeSelectedCheese.findIndex((x: any) => x.description == cheese.Description);
        if (indexForwholeDelete != '-1'){
          this.wholeSelectedCheese.splice(indexForwholeDelete, 1);
        }
        let indexForRightDelete = this.rightSideSelectedCheese.findIndex((x: any) => x.description == cheese.Description);
        if (indexForRightDelete != '-1'){
          this.rightSideSelectedCheese.splice(indexForRightDelete, 1);
        }
      }
      
    }
    // console.log(this.selcetPizzaToppingCheese[index]);
    
    
  }

  leftsideCheese:any=[]
  leftSideSelectedCheese:any=[]
  leftcheese:any=[]
  selectSizeLeft(size:any,cheese:any, index:any){
    this.pizzaSide[index] = size;
    console.log('hwee',this.pizzaSide[index]);
    
    let indexForwholeDelete = this.wholeSelectedCheese.findIndex((x: any) => x.description == cheese.Description);
    if (indexForwholeDelete != '-1'){
      this.wholeSelectedCheese.splice(indexForwholeDelete, 1);
    }
    let indexForRightDelete = this.rightSideSelectedCheese.findIndex((x: any) => x.description == cheese.Description);
    if (indexForRightDelete != '-1'){
      this.rightSideSelectedCheese.splice(indexForRightDelete, 1);
    }


    this.leftsideCheese[index] = size;
    this.leftcheese[index] = cheese.Description;
    

    console.log(this.leftsideCheese[index])

    const obj ={
      description:this.leftcheese[index]
    }
    this.leftSideSelectedCheese.push(obj)
    console.log(this.leftSideSelectedCheese);

  }


  wholeCheese:any=[]
  wholeSelectedCheese:any=[]
  wholecheese:any=[]
  selectSizeWhole(size:any,cheese:any,index:any){
    this.pizzaSide[index] = size;

    
    let indexForDelete = this.leftSideSelectedCheese.findIndex((x: any) => x.description == cheese.Description);
    console.log(indexForDelete);
     if (indexForDelete != '-1'){
      this.leftSideSelectedCheese.splice(indexForDelete, 1);
     }
    let indexForRightDelete = this.rightSideSelectedCheese.findIndex((x: any) => x.description == cheese.Description);
    if (indexForRightDelete != '-1'){
      this.rightSideSelectedCheese.splice(indexForRightDelete, 1);
    }
      
    
    this.wholeCheese[index] = size;
    this.wholecheese[index] = cheese.Description;
    console.log('2',this.wholeCheese[index]);

    const obj ={
      description:this.wholecheese[index]
    }
    this.wholeSelectedCheese.push(obj)
    console.log('2',this.wholeSelectedCheese);
  }


  rightsideCheese:any=[]
  rightSideSelectedCheese:any=[]
  rightcheese:any=[]
  selectSizeRight(size:any,cheese:any,index:any){
    this.pizzaSide[index] = size;
    console.log(this.pizzaSide[index]);
    

    let indexForDelete = this.leftSideSelectedCheese.findIndex((x: any) => x.description == cheese.Description);
    if (indexForDelete != '-1'){
      this.leftSideSelectedCheese.splice(indexForDelete, 1);
    }
    let indexForwholeDelete = this.wholeSelectedCheese.findIndex((x: any) => x.description == cheese.Description);
    if (indexForwholeDelete != '-1'){
      this.wholeSelectedCheese.splice(indexForwholeDelete, 1);
    }

    this.rightsideCheese[index] = size;
    this.rightcheese[index] = cheese.Description;
    console.log('1',this.rightsideCheese[index]);

    const obj ={
      description:this.rightcheese[index]
    }
    this.rightSideSelectedCheese.push(obj)
    console.log('2',obj);
  }

regularCheese:any=[]
customizeSliceButtonCheese( cheese:any,size:any, index:any){
  this.regularCheese[index]= size.Size;
  // console.log(this.regularCheese);

  // console.log(cheese);
  
 

  if (this.pizzaSide[index] == 'Left Side'){
    let indexForDelete = this.leftSideSelectedCheese.findIndex((x: any) => x.description == cheese)
    var aa = this.leftSideSelectedCheese[indexForDelete]
    aa.size= size.Size
    // console.log('aa',aa);
    
    }
    else if (this.pizzaSide[index]=="Right Side"){
      let indexForDelete = this.rightSideSelectedCheese.findIndex((x: any) => x.description == cheese)
      var bb = this.rightSideSelectedCheese[indexForDelete]
      bb.size= size.Size
      // console.log('aa',aa);
    }
    else{
      let indexForDelete = this.wholeSelectedCheese.findIndex((x: any) => x.description == cheese)
      var nn = this.wholeSelectedCheese[indexForDelete]
      nn.size= size.Size
      // console.log('aa',aa);
    }
  
  
}


}
