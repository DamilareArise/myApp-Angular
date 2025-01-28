import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // loginForm = {
  //   email:new FormControl(''),
  //   password:new FormControl('')
  // }

  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.min(4)])
  // })

  fb = inject(FormBuilder)
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })

  ngOnInit(){
    this.loginForm.patchValue({
      email:'dami@gmail.com',
    })
  }

  handleSubmit(){
    console.log(this.loginForm.controls);

  }
}
