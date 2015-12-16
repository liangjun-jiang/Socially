angular.module('socially', [
  'angular-meteor',
  'ui.router',
  'accounts.ui',
  'angularUtils.directives.dirPagination',
  'uiGmapgoogle-maps',
  'ui.bootstrap'
]);

function onReady() {
  angular.bootstrap(document, ['socially'], {
    strictDi: true
  });
}

if (Meteor.isCordova) {  
  angular.element(document).on("deviceready", onReady);
  Push.debug = true
  Push.enabled(true);
}
else
  angular.element(document).ready(onReady);


Push.addListener('message', function(notification) {
    // Called on every message
  console.log('received: '+JSON.stringify(notification));

  function alertDismissed() {
    // NotificationHistory.update({_id: notification.payload.historyId}, {
    //   $set: {
    //     "recievedAt": new Date()
    //   }
    // });
  };
  alert(notification.message, alertDismissed, notification.title, "Ok");
});