
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistartionServicesService {
 
private baseUrl:String= 'http://localhost:8080';
  
 constructor(private http:HttpClient) {}

  

 submitForm(data:any){

  return this.http.post(`${this.baseUrl}/submitForm`,data)

 }

  
  
 
   

   
}


