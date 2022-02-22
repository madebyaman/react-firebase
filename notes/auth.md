# Firebase Auth

- `createUserWithEmailAndPassword` returs a promise with userCredential object
- `onAuthStateChanged` is a listener that fires when the user is signed in or out.
  - returns unsubscribe to stop listening.
  - It needs a callback function.
- `signout` is a promise based method to signout.
- `currentUser` gets the current user or null.
