import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REEACT_APP_STORAGE_BUCKET,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    this.auth = app.auth();

    this.googleAuthProvider = new app.auth.GoogleAuthProvider();
  }

  doGoogleSignIn() {
    // this.auth.signInWithRedirect(this.googleAuthProvider);
    this.auth.signInWithPopup(this.googleAuthProvider);
  }

  user(uid) {
    this.db.ref(`/users/${uid}`);
  }
}

export default Firebase;
