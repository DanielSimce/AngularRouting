import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SimoService } from '../simo.services';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {
  
  @ViewChild('f',{static:false}) signUpForm:NgForm;

  constructor(private simoService:SimoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signUpForm.value);
    this.simoService.addServer(this.signUpForm.value.Id,this.signUpForm.value.Name,this.signUpForm.value.Status);
    this.signUpForm.reset();
  }

}
