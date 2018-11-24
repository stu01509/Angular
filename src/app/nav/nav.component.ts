// import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth) {

  }

  ngOnInit() {
    this.afAuth.authState
      .subscribe((user) => console.log(user));
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // .then((userCredentials) => this.userName = userCredentials['additionalUserInfo'].profile['name']);
  }

  googleSignIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((userCredentials) => console.log(userCredentials));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
