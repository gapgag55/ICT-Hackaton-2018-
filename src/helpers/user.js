import { 
  database,
  firebaseAuth
} from '../config/constants'

export const getUserId = function() {
  if (!firebaseAuth().currentUser) return false
  return firebaseAuth().currentUser.uid
}

// export const getTypeRole = function() {
//   return database.ref('/users').child(getUserId()).once('value').then(function(snapshot) {
//     return snapshot.val();
//   });
// }
