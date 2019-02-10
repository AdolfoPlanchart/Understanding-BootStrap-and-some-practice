import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = [];

  emptyError = false;

  constructor() { }

  ngOnInit() {
  }

  addServer(srv){
    if(srv){
      this.servers.push(srv);
      this.emptyError = false;
    } else{
      this.emptyError = true;
    }
  }

  delLstSrv(){
    this.servers.pop();
  }

  delSrvrs(){
    this.servers = [];
  }

}
