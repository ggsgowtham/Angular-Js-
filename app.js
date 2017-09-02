(function() {
  'use strict';

  angular.module('list',[])
  .controller('listController', listController);

listController.$inject = ['$scope'];

function listController($scope) {

  $scope.name = "Dosa,Puri,PavBhaji,chapati,vada";
  $scope.mySplit = function() {
  $scope.Message = " ";
  $scope.data = $scope.name.trim();

  var array = [];
  if($scope.data.length){
      var array = $scope.data.split(',');
  }

//If items are empty it shows Enter Data Message
  if(array.length<1){
    $scope.Message = "Enter Data"; //Used to display message on page
      console.log($scope.data);
      console.log(array);
      alert("Enter Data");
      return $scope.data;
  }

//If items<=3 it displays this message
  else if(array.length<=3 && array.length >=1) {
    $scope.Message = "Enjoy"; //Used to display message on page
    console.log("Enjoy");
    console.log($scope.data);
    alert("Enjoy");
    return $scope.data;
  }

//for items>3
  else if (array.length>3) {
    $scope.Message = "TooMuch!"; //Used to display message on page
    console.log("TooMuch");
    alert("TooMuch!");
    return $scope.data;
  }


  //return array[n];
}

};


})();
