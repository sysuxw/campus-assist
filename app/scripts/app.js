'use strict';

var campusApp = angular.module('campusApp', ['ui.router']);

campusApp.run(function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});

campusApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/index');
  $stateProvider
    .state('index', {
      url: '/index',
      views: {
        '': {
          templateUrl: 'views/home.html'
        },
        'carousel@index': {
          templateUrl: 'views/carousel.html'
        }
      }
    })
    .state('task', {
      url: '/task/list',
      views: {
        '': {
          templateUrl: 'views/task.html',
        },
        'taskGrid@task': {
          templateUrl: 'views/taskGrid.html'
        },
      }
    })
    .state('taskdetail', {
      url: '/taskdetail/:taskId',
      views: {
        '': {
          templateUrl: 'views/taskDetail.html'
        }
      }
    })
    .state('tasksubmit', {
      url: '/task/submit',
      templateUrl: 'views/taskSubmit.html'
    })
    .state('signup', {
      url: '/signup',
      views: {
        '': {
          templateUrl: 'views/signup.html'
        }
      }
    });
});
