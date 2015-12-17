Meteor.startup(function () {
  if (Parties.find().count() === 0) {
    var parties = [
      {
        'name': 'Dubstep-Free Zone',
        'description': 'Fast just got faster with Nexus S.'
      },
      {
        'name': 'All dubstep all the time',
        'description': 'Get it on!'
      },
      {
        'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.'
      }
    ];

    for (var i = 0; i < parties.length; i++) {
      Parties.insert(parties[i]);
    }
  }
});


Meteor.methods({
  'postParseInstallation': function(token) {
    var data = {}; 
    if (token.gcm) {
      // data['deviceType'] = 'android';
      // data['pushType'] = 'gcm';
      // data['GCMSenderId'] = '961358389228';
      // data['deviceToken'] = 'APA91bFCZUBYtcmJtKMiydHqe9VWOVZCEla2O0mFQ9Ig9hPCqtRrpQl24tAWcBEKkUbGvfS-qBp_AtwNHyBAacZroG0Bv3zz3bbwIeG_SIkTrU3UfCvqJ610HnaMABoOzq3SfkLzhWRr';
      HTTP.call( 'POST', 'https://api.parse.com/1/installations', {
      headers: {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'NrQTV4aC2LCHicySh2CA0SvxVNKF788j6XcVceMc', //Meteor.settings.parse_aplicationId,
      'X-Parse-REST-API-Key': 'wCx55wj2Nf5EaPKWIEooSj9ZLU0ORDkAKujZQF2e'//Meteor.settings.parse_apiKey
      },
      data: {
        'deviceType':'android',
        'pushType':'gcm',
        'deviceToken':token.gcm,
        'GCMSenderId':'961358389228'
      }
      }, function( error, response ) {
        if ( error ) {
        console.log( error );
      } else {
        console.log( response );
      }
      });

    }
    else {
      HTTP.call( 'POST', 'https://api.parse.com/1/installations', {
      headers: {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'NrQTV4aC2LCHicySh2CA0SvxVNKF788j6XcVceMc', //Meteor.settings.parse_aplicationId,
      'X-Parse-REST-API-Key': 'wCx55wj2Nf5EaPKWIEooSj9ZLU0ORDkAKujZQF2e'//Meteor.settings.parse_apiKey
      },
      data: {
        'deviceType':'ios',
        'deviceToken':token.apns,
      }
      }, function( error, response ) {
        if ( error ) {
        console.log( error );
      } else {
        console.log( response );
      }
      });
    };
    console.log(data);
    
  }   
});
  