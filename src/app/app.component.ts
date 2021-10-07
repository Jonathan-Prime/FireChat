import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { ChatService } from './providers/chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  // tslint:disable-next-line:variable-name
  constructor(firestore: AngularFirestore, public _cs: ChatService) {
  }
}
