angular.module("socially").run(function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
      $state.go("/parties");
    }
  });
});


angular.module('socially').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('parties', {
      url: '/parties',
      templateUrl: 'client/parties/parties.ng.html',
      controller: 'PartiesListCtrl'
    })
    .state('partyDetails', {
      url: '/parties/:partyId',
      templateUrl: 'client/parties/partiesDetail.ng.html',
      controller: 'PartiesDetailsCtrl',
      resolve: {
        'subscribe': [
          '$meteor', function($meteor) {
            return $meteor.subscribe('parties');
          }
        ]
      }
    });

  $urlRouterProvider.otherwise("/parties");
});