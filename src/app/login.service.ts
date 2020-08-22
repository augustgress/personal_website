import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  constructor() { 
  }

  login(username: string, password: string){   
    console.log("you typed in:" + username + " " + password + " wow, good job");
  }
  
}