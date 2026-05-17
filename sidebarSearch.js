 angular.module("myApp").directive("sidebar",[ '$rootScope','$location',function($location,$rootScope){
	 return{
		   restrict : "E",
		   templateUrl: 'par/sidebar.html',
		    replace: true,
      scope: {
      }
	 }
	 
	 
 }]);