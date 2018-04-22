import { messaging } from '../config/constants'

messaging.requestPermission().then(function() {
   //getToken(messaging);
   return messaging.getToken();
}).then(function(token){
  console.log(token);
})
.catch(function(err) {
  console.log('Permission denied', err);
});


messaging.onMessage(function(payload){
console.log('onMessage: ',payload);
});

// curl -X POST -H "Authorization: key=AIzaSyD4xqvczyz5Tvi_-Cyj_7Ut3ci6-6o39rA" -H "Content-Type: application/json" -d '{
//   "to": "cQ0UvHxU_j0:APA91bF_9ux6hJ-IGRCBlVQ67PlUP2_OcpElIQ051VuZJWEtfMeAhcl21AB08gdR18ZKMIssbfb70m9FHybWCQUEFHy0G7s_fCGY6r3CVIBOo9drFrdesgE-Hoyg3lSFOj-2smXdNDAj",
//   "notification": {
//     "title": "FCM Message",
//     "body": "This is an FCM Message",
//   }
// }' "https://fcm.googleapis.com/fcm/send"