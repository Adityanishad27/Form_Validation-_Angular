import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistartionServicesService } from '../../Services/registartion-services.service';
import { C } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
   
  data={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phone:'',
    pin:'',
    address:''

  }

  flag=false;


 
constructor( private registration:RegistartionServicesService, private snack:MatSnackBar,private http:HttpClient) {}
   

   

   onSubmit(form: NgForm){

      console.log("form submitted");
    //console.log("DATA", this.data ?? {});

    if(this.data.firstName=='' || this.data.lastName=='' || this.data.email=='' || this.data.password=='' || this.data.phone=='' || this.data.pin=='' ||  this.data.address==''){
       
      this.snack.open("Please fill all the fields", "OK", );

     
      return;
       
      }
      
  this.flag=true;
   this.registration.submitForm(this.data).subscribe(
      response=>{
        console.log('Form Submit successfully', response);
       this.flag=false;
     this.snack.open("Form Submit successfully", "OK");
     form.reset();
      },
     error => {
       console.log('Form Submission Failed', error);
       this.snack.open("Form Submission Failed", "OK");
     this.flag=false;
      }
  );



  }
}
