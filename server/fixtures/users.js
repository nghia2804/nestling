Accounts.urls.enrollAccount = function (token) {
  return Meteor.absoluteUrl('enroll-account/' + token);
};

if (Meteor.users.find().count() === 0) {
  var andrewId = Accounts.createUser({
       email:    'osborna@gatech.edu',
       password: '4460-andrew',
       profile: {
         firstName: 'Andrew',
         lastName: 'Osborn'
       },
       roles: ['authorizedUser']
     });
  //Accounts.sendEnrollmentEmail(andrewId);

  var caseyId = Accounts.createUser({
       email:    'caseybennett@gatech.edu',
       password: '4460-casey',
       profile: {
         firstName: 'Casey',
         lastName: 'Bennett'
       },
       roles: ['authorizedUser']
     });
  //Accounts.sendEnrollmentEmail(caseyId);

  var nghiaId = Accounts.createUser({
       email:    'nghiahuynh@gatech.edu',
       password: '4460-nghia',
       profile: {
         firstName: 'Nghia',
         lastName: 'Huynh'
       },
       roles: ['authorizedUser']
     });
  //Accounts.sendEnrollmentEmail(nghiaId);

  var donId = Accounts.createUser({
       email:    'dgeldbach3@gatech.edu',
       password: '4460-don',
       profile: {
         firstName: 'Don',
         lastName: 'Geldbach'
       },
       roles: ['authorizedUser']
     });
  //Accounts.sendEnrollmentEmail(donId);
}
