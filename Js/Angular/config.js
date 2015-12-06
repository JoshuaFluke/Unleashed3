app.config(function ($stateProvider, $urlRouterProvider) {
    //whats going in the url and an object with properties, of url, templateurl and controller
    $stateProvider
        .state('go', {
            url: '/go',
            templateUrl: 'js/home/homeTempl.html'

        })
        .state('bodybuilder', {
            url: '/bodybuilder',
            templateUrl: 'Js/BodyBuilder/Bodybuilder.html'

        })
        .state('athletic', {
            url: '/athletic',
            templateUrl: 'Js/Athletic/Athletic.html'
        })
        .state('agile', {
            url: '/agile',
            templateUrl: 'Js/Agile/agile.html'
        })

    $urlRouterProvider
        .otherwise('/')
});


app.constant('fb', {
    url: 'https://liftfriendly.firebaseio.com/'
})

app.factory('fbRef', function(fb) {
   return new Firebase(fb.url);
});

app.service('fbService', function ($firebaseArray, $firebaseObject, fbRef) {
    this.getAllComments = function () {
        var ref = fbRef.child('comments');
        return $firebaseArray(ref);
    }
    
    this.getNames = function () {
        var ref = fbRef.child('Names');
        return $firebaseArray(ref);
    }
})