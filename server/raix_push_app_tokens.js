Meteor.publish("_raix_push_app_tokens", function () {
  return Meteor._raix_push_app_tokens.find({}, {fields: {token: 1}});
});