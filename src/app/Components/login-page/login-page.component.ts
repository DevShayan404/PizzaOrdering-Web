import { Component, OnInit} from '@angular/core';
import { faCircleQuestion, faCircleExclamation, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  faCircleQuestion = faCircleQuestion;
  faCircleExclamation = faCircleExclamation;
  faCheckCircle = faCheckCircle;


  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
 

  loginForm= new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
   })
   get Email(): FormControl{
    return this.loginForm.get("email") as FormControl;
   }
   get Password(): FormControl{
    return this.loginForm.get("password") as FormControl;
   }
   toastwarning=false;
   toastSuccess=false;
   submitLoginForm(data:any){
    
    if( this.loginForm.invalid ){
        this.toastwarning= true;
        setTimeout(() => {
          this.toastwarning= false;
        },3000);
    }else{
      this.toastSuccess=true;
      setTimeout(() => {
        this.toastSuccess= false;
        this.router.navigate([''])
      },2000);
      
      console.log(data);
      this.loginForm.reset();
    }
   }
   toastclose(){
    this.toastwarning= false;
   }


   registerForm = new FormGroup({
    userName: new FormControl("",[Validators.required]),
    Email: new FormControl("",[Validators.required, Validators.email]),
    Password: new FormControl("",[Validators.required])
   })
   get UserName():FormControl{
    return this.registerForm.get("userName") as FormControl;
   }
   get RgisterEmail():FormControl{
    return this.registerForm.get("Email") as FormControl;
   }
   get RgisterPassword():FormControl{
    return this.registerForm.get("Password") as FormControl;
   }
   toastRegister=false;
   submitRigisterForm(data:any){
    if( this.registerForm.invalid ){
      this.toastwarning= true;
      setTimeout(() => {
        this.toastwarning= false;
      },3000);
  }else{
    this.toastRegister=true;
    setTimeout(() => {
      this.toastRegister= false;
      window.location.reload();
    },2000);
    
    console.log(data);
    this.registerForm.reset();
  }
    
   }

}
