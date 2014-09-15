(function(){
  'use strict';

  angular.module('yum.my')
  .controller('RegisterCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      toastr.success('Successfully Registered!');
      $location.path('/login');
    }

    function failure(){
      toastr.error('Inconceivable!');
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };
  }]);
})();
