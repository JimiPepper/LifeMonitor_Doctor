'use strict';

/**
 * @ngdoc function
 * @name lifeMonitorDoctorApp.controller:patientCtrl
 * @description
 * # patientCtrl
 * Controller of the lifeMonitorDoctorApp
 */
app.controller('patientCtrl', ['$scope', '$stateParams', '$state', 'Patients', function ($scope, $stateParams, $state, Patients){
	// For nav redirections
	$scope.$state = $state;
	$scope.$stateParams = $stateParams;

	$scope.patient = null;

	$scope.loadPatient = function() {
		Patients.getPatient($stateParams.id).then(
			// OK
		   	function(patient){
		   		$scope.patient = patient ;
		   	},
		   	// ERROR
		   	function(msg){
		   		alert(msg);
		   	}
		);
	};
	$scope.loadPatient();
}]);
