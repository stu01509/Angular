import { Injectable } from '@angular/core';

import { of as observableOf, from } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public userName: any = '';

  // uid = this.afAuth.authState.pipe(
  //   map(authState => {
  //     if (!authState) {
  //       return null;
  //     } else {
  //       return  authState.uid;
  //     }
  //   }),
  // );



  // isAdmin = observableOf(true);

  constructor(private afAuth: AngularFireAuth) { }

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
