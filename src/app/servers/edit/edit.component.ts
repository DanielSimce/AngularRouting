import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SimoService } from 'src/app/simo.services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  server:{id:number,name:string,status:string};
  name:string = '';
  status:string = '';

  constructor(private route:ActivatedRoute,private simoServices:SimoService) { }

  ngOnInit(): void {
   const id = +this.route.snapshot.params['id'];
   this.server = this.simoServices.getServer(id);

   this.name = this.server.name;
   this.status = this.server.status;
    
  }

  onUpdate(){
    this.simoServices.updateServer(this.server.id,{name:this.name,status:this.status});
  }

}
