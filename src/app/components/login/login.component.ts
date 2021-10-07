import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  // tslint:disable-next-line:variable-name
  constructor( public _cs: ChatService ) { }

  ingresar( proveedor: string ) {
    console.log( proveedor );
    this._cs.login( proveedor );
  }

}
