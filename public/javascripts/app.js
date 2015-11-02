'use strict';

/* App Module */


var app = angular.module ( "app", ["ui.router", "ngSanitize", "ngResource"] )
  ;



app.config(function ($stateProvider, $urlRouterProvider) {
  
  

	$urlRouterProvider.otherwise('/home');


  

  $stateProvider
	.state('home', {
            url: '/home',
            templateUrl: '/partials/home.html',
			controller: 'homeController'
        })
		
    
	  
  	.state ( "media", {
  		url : '/media',
		templateUrl : '/partials/media.html',
		controller: 'mediaController'
	});



	


});




/* mockdata*/




