import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  fb = inject(FormBuilder)

  signupForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email] ],
    gender: ['', Validators.required],
    password: ['', [Validators.required, Validators.min(4)]],
    confirm_password: ['', Validators.required],
  })

  // signupForm = new FormGroup({
  //   fullname: new FormControl(''),
  //   email: new FormControl(''),
  //   gender: new FormControl(''),
  //   password: new FormControl(''),
  //   confirm_password: new FormControl(''),

  // })



  // ngOnInit(){
  //   this.signupForm.patchValue({fullname:'Damilare'})
  // }

  // fullname = new FormControl('')
  // email = new FormControl('')
  // gender = new FormControl('Select Gender')
  // password = new FormControl('')
  // confirm_password = new FormControl('')

  handleSignup(){
    // console.log(this.fullname.value);
    console.log(this.signupForm.value);
    console.log(this.signupForm.errors);
    
  
  }
}
