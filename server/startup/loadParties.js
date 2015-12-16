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


  if (raix_push_app_tokens.find().count() > 0 {
    var tokens = raix_push_app_tokens.find();
    var token = tokens[0];
    if (token.gcm) {
      $http({
        method: 'POST',
        url: 'https://api.parse.com/1/installations',
        headers: {
          'Content-Type': 'application/json',
          'X-Parse-Application-Id': 'NrQTV4aC2LCHicySh2CA0SvxVNKF788j6XcVceMc',
          'X-Parse-REST-API-Key':'wCx55wj2Nf5EaPKWIEooSj9ZLU0ORDkAKujZQF2e'
        },
        data: {
                deviceType: "android",
                pushType: "gcm",
                deviceToken: token.gcm,
                GCMSenderId: "961358389228"
              }
        }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
          console.log(JSON.stringify(response));
        }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
           console.log(JSON.stringify(response));
        });
      console.log(token.gcm);
    } else {
      $http({
        method: 'POST',
        url: 'https://api.parse.com/1/installations',
        headers: {
          'Content-Type': 'application/json',
          'X-Parse-Application-Id': 'NrQTV4aC2LCHicySh2CA0SvxVNKF788j6XcVceMc',
          'X-Parse-REST-API-Key':'wCx55wj2Nf5EaPKWIEooSj9ZLU0ORDkAKujZQF2e'
        },
        data: {
                deviceType: "ios",
                deviceToken: token.apns
              }
        }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
          console.log(JSON.stringify(response));
        }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
           console.log(JSON.stringify(response));
        });
      console.log(token.apns);
    }  
}
