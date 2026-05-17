'user strict'
var app = angular.module("myApp", ['ui.router','oc.lazyLoad']);
app.config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider',function($ocLazyLoadProvider,$stateProvider, $urlRouterProvider) {
   $ocLazyLoadProvider.config({
        'debug': false, // For debugging 'true/false'
        'events': true,
   });
   $urlRouterProvider.otherwise("/login");
   //alert('123');
  $stateProvider
      .state('dashboard', {
      url: "/dashboard",
      templateUrl: "par/main.html",
 
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
               'sidebarSearch.js'
              ]
            })
		
			
            }
		   }
	}
	) 
    .state('login', {
      url: "/login",
      templateUrl: "par/login.html",
     controller: 'YourCtrl',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			  
              'myController.js'
              ]
            })
	
			
            }
		   }
	}
	) 
    .state('dashboard.page1', {
      url: "/page1",
      templateUrl: "par/page1.html",
     controller: 'YourCtrlTwo',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			    //'sidebarSearch.js',
              'myControllerTwo.js',
			  'customfile.js'
              ]
            })
	
            }
		   }
	}
	)
    	.state('dashboard.page8', {
      url: "/page8",
      templateUrl: "par/page8.html",
      controller: 'YourCtrl',
	       resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'myApp',
              files:[
			  	   'sidebarSearch.js',
              'myController.js'
              ]
            })
            }
		   }
    })
	;
   
}]);