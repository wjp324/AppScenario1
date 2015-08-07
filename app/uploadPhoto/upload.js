'use strict';

angular.module('myApp.upload', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/upload', {
            templateUrl: 'uploadPhoto/upload.html',
            controller: 'UploadCtrl'
        });
    }])

    .controller('UploadCtrl', ['$scope', '$http',function($scope, $http) {
        $scope.add = function(){
            var f = document.getElementById('file').files[0],
                r = new FileReader();
            r.onloadend = function(e){
                var data = e.target.result;
                //send you binary data via $http or $resource or do anything else with it
                $http.response()
                $http.post('http://localhost.corp.ebay.com:8080/storageService/upload',f);
            }
            r.readAsBinaryString(f);
        }

    }]);