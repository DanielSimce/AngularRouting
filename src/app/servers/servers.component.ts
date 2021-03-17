import { Component, OnInit } from '@angular/core';
import { SimoService } from '../simo.services';
import { ServersService } from './servers.services';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers:{id:number,name:string,status:string}[] = [];

  constructor(private simoService:SimoService) { }

  ngOnInit(): void {
    this.servers = this.simoService.servers;
  }

}
