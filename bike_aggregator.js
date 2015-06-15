if (Meteor.isClient) {
  // counter starts at 0
    Session.setDefault('counter', 0);

  Template.body.helpers({
    bikes:[

      {name:"Hero Honda", price:"42,3000", rating:"3.4"},
      {name:"Bajaj Pulsar", price:"60,3000", rating:"2.4"},
      {name:"Hero CD DAWN", price:"33,3000", rating:"1.4"},
      {name:"TVS APACHE RTR", price:"78,3000", rating:"1.0"}

    ]


  });

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
