var headerCtrl= angular.module("myheader", []);
headerCtrl.controller("myheaderCtrl", function($scope) {
 $scope.cards = [
 { id: "mmm" ,
 name:"anchal",
 age:48
 },
 { id: "2" ,
  name:"nigam",
  age:67
  
 }];
});
headerCtrl.controller('check',function($scope){
	 $scope.appDetails=
	 {
		 title:"Bookbazar",
		tagline:"Your Online BookBazar"
	 }
	
	
	
});
