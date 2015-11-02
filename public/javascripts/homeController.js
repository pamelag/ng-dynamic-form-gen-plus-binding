'use strict';

/* Controllers */

app.controller ( "homeController", [ "$scope", "$timeout",
	function ( $scope, $timeout) {
	
		$scope.modelKeys = ["name", "age"];
	
		$scope.submitEntry = function() {
			var entry = new Object();
			for(var counter=0; counter<2; counter++) {
				entry[$scope.modelKeys[counter]] = $scope[$scope.modelKeys[counter]];
				//entry[$scope.modelKeys[1]] = $scope[$scope.modelKeys[1]];
			
			}
			
			
		
		
			/*var data = {
			
				$scope.modelKeys[0] : $scope[$scope.modelKeys[0]],
				$scope.modelKeys[1] : $scope[$scope.modelKeys[1]]
			
			}*/
			console.log("entry:"+JSON.stringify(entry));
		}

		$scope.html = '<form ng-submit="submitEntry()"><input name="name" ng-model="name" type="text"><br><br><input name="age" ng-model="age" type="text"><br><br><button type="submit">Submit Entry</button></form>';
			
	}
]);
