import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private userservice:UserServiceService, private router :Router) { }
id:number = 2

  ngOnInit(): void {
    this.getall();
  }
  datapost:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required]),
    pass:new FormControl('',[Validators.required])
  })

postUser(){
  this.userservice.log(this.datapost.value).subscribe(respo=>{
    console.log(respo)
    this.router.navigate([''])
    alert("success login") 
  },error=>{
    alert("invalid email or password")
  })
}

  login(){
    this.postUser();
  }

  getall(){
    this.userservice.all(this.id).subscribe(respo=>{
      console.log(respo)
    })
  }

}
