import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  signUpForm:FormGroup


  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      id: new FormControl(null,Validators.required),
      name: new FormControl(null,Validators.required)
    });
  }

  onSubmit(){
    console.log(this.signUpForm);
    const id = this.signUpForm.get('id').value;
    const name = this.signUpForm.get('name').value;
    this.userService.addUser(id,name);
    this.signUpForm.reset();
  }

}
