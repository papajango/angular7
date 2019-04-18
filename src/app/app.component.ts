import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBi3bzwfRoBIXp2Pe1FFHA7shWfDm4-jUQ',
      authDomain: 'ng-recipe-book-c8c50.firebaseapp.com'
    });
  }
}
