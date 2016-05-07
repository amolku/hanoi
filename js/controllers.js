var hanoiApp = angular.module('hanoiApp', []);


hanoiApp.controller('HanoiCtrl', function($scope) {
    $scope.hanoiText = "Select some number of discs!";
    $scope.discs = 1;
    
    var hanoi = function (disc, src, aux, dst, ret) {
        if (disc > 0) {
            ret = hanoi(disc - 1, src, dst, aux, ret);
            ret = ret + 'Move disc ' + disc + ' from ' + src + ' to ' + dst + '\n';
            ret = hanoi(disc - 1, aux, src, dst, ret);
        }
        return ret;
    };

    $scope.setHanoiText = function(numOfDiscs) {
        $scope.hanoiText = hanoi(numOfDiscs, "src", "aux", "dest", "");                  
    };


});