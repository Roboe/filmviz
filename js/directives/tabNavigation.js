(function() {
	
	angular.module('filmVizApp')
		.directive('tabNavigation', function () {
			return {
				restrict: 'E',
				transclude: true,
				scope: {
					items: "=",
					isDeletable: "=deletable"
				},
				templateUrl: 'js/directives/templates/tabNavigation.html',
				link: function(scope, element, attributes) {
					scope.activeTab = 0;

					scope.selectTab = function(setTab) {
						scope.activeTab = setTab;
					};

					scope.isSelected = function(checkTab){
						return scope.activeTab === checkTab;
					};

					scope.remove = function(setTab){
						scope.activeTab = setTab;
						console.log("borrarTab", scope.activeTab);
					};
				}
			};
		});


}());