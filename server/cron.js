// SyncedCron.add({
//   name: 'Collect minute log for thermostat',
//   schedule: function(parser) {
//     // parser is a later.parse object
//     return parser.text('every 1 minute');
//   },
//   job: function() {
//     var ACCESS_TOKEN_URL = "https://api.home.nest.com/oauth2/access_token",
//         CLIENT_ID = '3a61fbea-3504-4626-b9d2-7390a0269f04',
//         CLIENT_SECRET = 'EBGmnwSFdfgYqCMPi3KMFkedj',
//         AUTH_CODE_URL = "https://home.nest.com/login/oauth2?client_id=" + CLIENT_ID + "&state=FOO";
//
//
//     HTTP.call( 'POST', ACCESS_TOKEN_URL, {
//       data: {
//         "code"=AUTHORIZATION_CODE,
//         "client_id"=CLIENT_ID,
//         "client_secret"=CLIENT_SECRET,
//         "grant_type"="authorization_code"
//       }
//     }, function( error, response ) {
//       if ( error ) {
//         console.log( error );
//       } else {
//         console.log( response );
//       }
//     });
//
//     var SUPER_SECRET_KEY = 'keyboard-cat';
//
//     var NEST_API_URL = 'https://developer-api.nest.com';
//
//     // PassportJS options. See http://passportjs.org/docs for more information.
//     var passportOptions = {
//       failureRedirect: '/auth/failure', // Redirect to another page on failure.
//     };
//
//     passport.use(new NestStrategy({
//       // Read credentials from your environment variables.
//       clientID: '3a61fbea-3504-4626-b9d2-7390a0269f04',
//       clientSecret: 'EBGmnwSFdfgYqCMPi3KMFkedj'
//     }));
//
//
//
//     function startStreaming(token) {
//       var source = new EventSource(NEST_API_URL + '?auth=' + token);
//
//       source.addEventListener('put', function(e) {
//         console.log('\n' + e.data);
//       });
//
//       source.addEventListener('open', function(e) {
//         console.log('Connection opened!');
//       });
//
//       source.addEventListener('auth_revoked', function(e) {
//         console.log('Authentication token was revoked.');
//         // Re-authenticate your user here.
//       });
//
//       source.addEventListener('error', function(e) {
//         if (e.readyState == EventSource.CLOSED) {
//           console.error('Connection was closed! ', e);
//         } else {
//           console.error('An unknown error occurred: ', e);
//         }
//       }, false);
//     }
//
//
//
//
//   }
// });
