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



app.service('fbService', function ($firebaseArray, $firebaseObject, fb) {


    this.getAllComments = function () {

        var ref = new Firebase(fb.url + '/comments');

        return $firebaseArray(ref);


    }
})