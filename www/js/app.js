(function(){

var app = angular.module('app', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('home',{
    url:'/home',
    views:{
      'tab-home':{
        templateUrl:'templates/home.html'
      }
    }
  })

  .state('details',{
    url:'/details',
    views:{
      'tab-home':{
        templateUrl:'templates/details.html'
      }
    }
  })

  .state('settings',{
    url:'/settings',
    views:{
      'tab-settings':{
        templateUrl: 'templates/settings.html'
      }
    }
  });
  
  $urlRouterProvider.otherwise('/home');
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

}());