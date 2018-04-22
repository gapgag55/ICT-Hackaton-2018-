import { 
  database,
  firebaseAuth,
  googleProvider,
  facebookProvider,
  twitterProvider
} from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}
export function logout () {
  return firebaseAuth().signOut()
}
export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}
export function loginWithGoogle() {
  return firebaseAuth().signInWithPopup(googleProvider);
}
export function loginWithFacebook() {
  return firebaseAuth().signInWithPopup(facebookProvider);
}
export function loginWithTwitter() {
  return firebaseAuth().signInWithPopup(twitterProvider);
}
export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}
export function saveUser (user) {
  
  return  database.ref('users/' + user.uid).set({
    email: user.email,
    about:  '',
    age: '',
    career: '',
    completed_job: '',
    fullname: '',
    last_work: '',
    year: ''
  });

}
