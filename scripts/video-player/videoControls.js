(function() {

  angular.module('filmViz')
    .directive('videoController', ['ProjectData', 'fileUtils', function(ProjectData, fileUtils) {

      return {
        restrict: 'E',
        templateUrl: 'scripts/video-player/videoControls.html',
        link: function(scope, element, attributes) {
          var video = document.getElementById('video');

          scope.data = [];

          scope.play = function() {
            video.play();
          };

          scope.pause = function() {
            video.pause();
          };

          scope.firstFrame = function() {
            video.currentTime = 0;
          };

          scope.automatic = function() {
            colorAnalyzer.colorAnalysis(ProjectData);
          };

          scope.loadProject = function(event) {
            fileUtils.readZip(ProjectData, event.target.files[0]);
          };
        },
      };
    },]);
}());