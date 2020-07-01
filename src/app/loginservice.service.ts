import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  chocolateCake;
  constructor() { 
    this.chocolateCake = false;
  }


  testFunction(username: string, password: string){    

    if (username == 'Chocolate Cake'){
      console.log("I like chocolate cake");
      this.chocolateCake = true;
    }
    console.log("hello!");

  }
  
}