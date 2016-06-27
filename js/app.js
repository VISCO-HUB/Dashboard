'use strict';

angular.module('FMCDashboard', []).

    run(['$rootScope', '$timeout',
        function ($scope, $timeout) {

			function setGraphState() {
				
				var p = $scope.chart.graphPercent[$scope.currentState];
				var minState = 31.2;
				var maxState = 79.5
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
				var s2 = $scope.chart.totalSaving[$scope.currentState-1];
				if($scope.currentState < $scope.prevState)
					s2 = $scope.chart.totalSaving[$scope.currentState+1];

				var timeoutInterval = Math.abs(225 / (s2-s1));
				timeoutInterval.toFixed(0);
				
				function startCount() {
					//if(!animateCounter || !s2) {return false}
					if(!s2) {s2 = 0}
					if(!animateCounter) {return false}
						
						$timeout (function(){ 
	
						
							if(s1 < s2)
								s2 -= 0.1;
							else 
								s2+= 0.1;
							//console.debug(s2)
							$scope.counterSaving = s2.toFixed(1)
									
							if(s2 + 0.05 < s1 || s2 > s1 + 0.05) {startCount()}
						
						}, timeoutInterval);
				}
					
				startCount();	
				$scope.prevState = $scope.currentState;
                $scope.$apply();
            };
              
			 
			  
			$timeout (function(){ 
				$scope.currentState = 1
				setGraphState();
				
			}, 200);
			   
            $scope.currentState = 0;
			$scope.prevState = -1;
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
			
			$scope.desaturate = function (itm) {
				if(!itm.desaturate) {return false;}								
				return itm.desaturate.indexOf($scope.currentState) != -1;
			}

        }]);