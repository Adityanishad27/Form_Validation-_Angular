import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistartionServicesService } from '../../Services/registartion-services.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
   
   
})
export class RegistrationComponent {


  

  data={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phone:'',
    dateofbirth:'',
    pin:'',
    address:''

  }

  flag=false;
  

 
constructor( private registration:RegistartionServicesService, private snack:MatSnackBar,private http:HttpClient) {}
   
   onSubmit(form: NgForm){


       
    //  this.data.dateofbirth= new Date(this.data.dateofbirth).toLocaleDateString();
 

      console.log("form submitted");
    console.log("DATA", this.data ?? {});

    if(this.data.firstName==""|| this.data.firstName== null || this.data.lastName==""||this.data.lastName==null || this.data.email==""||this.data.email==null || this.data.password==""||this.data.password==null || this.data.phone==""||this.data.phone==null    || this.data.dateofbirth==""|| this.data.dateofbirth==null     || this.data.pin==""|| this.data.pin==null  ||  this.data.address=="" || this.data.address== null ){
       
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
  dateInput(dateInput: any) {
    throw new Error('Method not implemented.');
  }
}
