var headerCtrl = angular.module("myHeader", ["ngRoute"]);
headerCtrl.config(function($routeProvider,$locationProvider) {
	
	  $locationProvider.hashPrefix('');
	$routeProvider
	.when("/books",{
		templateUrl:"partials/book-list.html",
		controller:"myBookListCtrl"
		
		
	})
	.when("/karts",{
		templateUrl: "partials/kart-list.html",
		controller:"kartListCtrl"
})
.otherwise({
	redirectTo:"/books"
});
	
	
	
	
});
headerCtrl.factory("bookService",function(){
	var books=[
	 {
		 imageUrl: "partials/bootstrap.jpg",
		 name:"Bootstrap 3",
		 price :"400",
		 rating : "4.5",
		 details: "Bootstrap gives you a taste of very popular frontend framework,Bootstrap in very simple manner.It also contains project that will help you in mastering bootstrap."
	 },
	 {
	 imageUrl: "partials/html.jpg",
		 name:"Introduction to HTML",
		 price :"300",
		 rating : "4.6",
		 details: "Introduction to HTML gives you a taste of very basic and important language,HTML in very simple manner.It also contains project that will help you in mastering HTML."


	 }];	 
	 return {
		 
		 getbooks:function(){
			 return books;
		 }
		 
		 
	 }
	
	
});

headerCtrl.factory("kartService",function(){
	var kart=[];
	return{
		getkart:function(){
			return kart;
			
		},
		addToKart:function(book){
			
			 kart.push(book);
		},
		buy:function(book){
			alert("Thanks for buying: ",book.name);
		}
		
		
	}
	
	
	
});

headerCtrl.controller('kartListCtrl',function($scope,kartService) {
	$scope.kart=kartService.getkart();
	$scope.buy=function(book){
		kartService.buy(book);
	}
	
	
	
	
});

headerCtrl.controller('myHeaderCtrl', function($scope,$location) {
     $scope.appDetails=
	 {
		 title:"BookBazzar",
		tagline:"Your Online BookBazar"
	 }
	 
   
});
headerCtrl.controller('myBookListCtrl', function($scope,bookService,kartService) {
     $scope.books=bookService.getbooks();
	 $scope.addToKart=function(book){
	     kartService.addToKart(book); 
	 }
   
});

