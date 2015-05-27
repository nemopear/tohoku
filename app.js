angular
	.module('tohoku',['ngAnimate','ui.router'])
	.config(
	
	function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/home");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "partials/list-tohoku.html"
	    })
	    .state('intro', {
	      url: "/intro",
	      templateUrl: "partials/intro.html",
	    })
	    .state('activity', {
	      url: "/activity",
	      templateUrl: "partials/activity.html"
	    })
	    .state('artist', {
	    	url: "/artist",
	    	templateUrl: "partials/artist.html"
	    })
	    .state('artist.shiko-munakata', {
	    	url: "/shiko-munakata",
	    	templateUrl: "partials/artists/shiko-munakata.html"
	    })
	    .state('artist.keisuke-serizawa', {
	    	url: "/keisuke-serizawa",
	    	templateUrl: "partials/artists/keisuke-serizawa.html"
	    })
	    .state('artist.shoji-hamada', {
	    	url: "/shoji-hamada",
	    	templateUrl: "partials/artists/shoji-hamada.html"
	    })
	    .state('artist.kanjiro-kawai', {
	    	url: "/kanjiro-kawai",
	    	templateUrl: "partials/artists/kanjiro-kawai.html"
	    });
	})
	// .controller('TabsCtrl',TabsCtrl);


	.controller('SliderController', function($scope) {
	  $scope.images = [{
	    src: 'basket-01.png',
	    title: 'Pic 1'
	  }, {
	    src: 'basket-02.png',
	    title: 'Pic 2'
	  }, {
	    src: 'basket-03.png',
	    title: 'Pic 3'
	  }, {
	    src: 'basket-04.png',
	    title: 'Pic 4'
	  }, {
	    src: 'basket-05.png',
	    title: 'Pic 5'
	  }, {
			src: 'basket-06.png',
			title: 'Pic 6'
	  }, {
	    src: 'basket-07.png',
	    title: 'Pic 7'
	  }, {
	    src: 'basket-08.png',
	    title: 'Pic 8'
	  }, {
	    src: 'basket-09.png',
	    title: 'Pic 9'
	  }, {
	    src: 'basket-10.png',
	    title: 'Pic 10'
	  }];
	})

	.directive('slider', function ($timeout) {
	  return {
	    restrict: 'AE',
			replace: true,
			scope:{
				images: '=',
			  imgnumber: '='				
			},
	    link: function (scope, elem, attrs) {
		
			scope.currentIndex=0;

			scope.next=function(){
				scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
			};
			
			scope.prev=function(){
				scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
			};
			
			scope.$watch('currentIndex',function(){
				scope.images.forEach(function(image){
					image.visible=false;
				});
				scope.images[scope.currentIndex].visible=true;

				scope.imgnumber = scope.currentIndex+1;

			});


			
			/* Start: For Automatic slideshow*/
			
			var timer;
			
			var sliderFunc=function(){
				timer=$timeout(function(){
					scope.next();
					timer=$timeout(sliderFunc,5000);
				},5000);
			};
			
			sliderFunc();
			
			scope.$on('$destroy',function(){
				$timeout.cancel(timer);
			});
			
			/* End : For Automatic slideshow*/
			
	    },
		templateUrl:'handicraft-slide.html'
	  }
	});

// function RouteConfig($routeProvider) {
// 	$routeProvider 
// 		.when('/', {
// 			template : 'Nemo Home'
// 		})
// 		.when('/intro', {
// 			template : 'Nemo Intro'
// 		})
// 		.when('/angular-test', {
// 			template : 'Nemo Angular'
// 		});
// }

function NavController() {
	this.homeActive  = true;
	this.introActive = false;
	this.artistActive = false;
	this.artActive = false;
	this.galleryActive = false;


	this.activate = function(menuActive) {
		this.homeActive  = false;
		this.introActive = false;
		this.artistActive = false;
		this.artActive = false;
		this.galleryActive = false;

		if ( menuActive === 'home') {
			this.homeActive = true;
		} else if ( menuActive === 'intro') {
			this.introActive = true;
		} else if ( menuActive === 'activity') {
			this.activityActive = true;
		} else if ( menuActive === 'art') {
			this.artActive = true;
		} else if ( menuActive === 'gallery') {
			this.galleryActive = true;
		}
	};
}



