import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverId = 10;
  serverStatus = 'offline';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = ( event.target as HTMLInputElement).value;
  }
}
