'user strict';


angular.module('myApp').controller('YourCtrlTwo',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
	/* $scope.name='ramakrishna';
	$scope.username=sessionStorage.getItem("userName");
	alert('123'); */
	$scope.loginfun=function(){
	
	$scope.user=angular.copy($scope.userName);
		$scope.pasd=angular.copy($scope.password);
		if($scope.user==='admin'&& $scope.pasd==='admin'){
			/* sessionStorage.setItem('userName', $scope.user); */
			$state.transitionTo ('dashboard.page1');
			
		}
		else if($scope.user==='emp' && $scope.pasd==='emp'){
			$state.go('dashboard.page8');
			
		}
		else{
		alert("try again")
		}
	
	}
	
	$( document ).ready(function() {
 $( "a" ).greenify();
});
	
}]);