import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SimoService } from 'src/app/simo.services';
import { ServersService } from '../servers.services';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server:{id:number,name:string,status:string};

  constructor(private simoServices:SimoService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.server = this.simoServices.getServer(id);

    this.route.params.subscribe(
      (params:Params) => {
       this.server =  this.simoServices.getServer(+params['id']);
      }
    )

  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

}
