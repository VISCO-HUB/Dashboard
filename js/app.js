'use strict';

angular.module('FMCDashboard', []).

    run(['$rootScope', '$timeout',
        function ($scope, $timeout) {

			function setGraphState() {
				
				var p = $scope.chart.graphPercent[$scope.currentState];
				var minState = 12.2;
				var maxState = 76.5
				var p100 = maxState - minState ;

				$scope.graphState = ((p / 100.0) * p100) + minState;
			}

            window.onkeydown = function (e) {
				
				console.log(e.keyCode)
				var animateCounter = false
				
                if ((e.keyCode == 39 || e.keyCode == 34) && $scope.currentState < $scope.maxState) { $scope.currentState++; animateCounter = true; }
                if ((e.keyCode == 37 || e.keyCode == 33) && $scope.currentState > $scope.minState) { $scope.currentState--; animateCounter = true; }

				if(e.keyCode == 35 && $scope.currentState != $scope.maxState) {$scope.currentState = $scope.maxState; animateCounter = true; }
				if(e.keyCode == 36 && $scope.currentState != $scope.minState) {$scope.currentState = $scope.minState; animateCounter = true;  }

				setGraphState();
				
				var s1 = $scope.chart.totalSaving[$scope.currentState];
				var s2 = $scope.chart.totalSaving[$scope.currentState - 1];
								
				function startCount() {
					if(!animateCounter || !s2) {return false}
						
						$timeout (function(){ 
	
							s2++;
							
							$scope.counterSaving = s2
									
							if(s2 < s1) {startCount()}
						
						}, 30);
				}
					
				startCount();	
				
                $scope.$apply();
            };
              
			 
			  
			$timeout (function(){ 
				$scope.currentState = 1
				setGraphState();
				
			}, 200);
			   
            $scope.currentState = 0;
            $scope.maxState = 10;
			$scope.minState = 1;
            $scope.table1 = table1;
			$scope.table2 = table2;
			$scope.chart = chart;
			$scope.graphState = 0;
			$scope.counterSaving = 0;
			
			$scope.glow = function (itm) {
				if(!itm.highLight) {return false;}
				return itm.highLight.indexOf($scope.currentState) != -1;
			}

        }]);