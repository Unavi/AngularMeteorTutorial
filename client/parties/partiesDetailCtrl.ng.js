angular.module("socially").controller("PartiesDetailsCtrl",function ($scope, $stateParams, $meteor) {
  $scope.party = $meteor.object(Parties, $stateParams.partyId);
  $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
  $scope.$meteorSubscribe('parties');
  $scope.save = function () {
    $scope.party.save();
    $scope.message = "Saved successful";
  };

  $scope.reset = function () {
    $scope.party.reset();
    $scope.message = "Reseted successful";
  };
});