import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { loginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private router: Router, public loginService: loginService) { }

  loginForm:FormGroup

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', [Validators.required, Validators.minLength(3)]]
    });
  
  }
  onSubmit(){
    console.log(this.loginForm)
    this.loginService.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value);
    this.router.navigateByUrl("home-page");
    
  }
}
