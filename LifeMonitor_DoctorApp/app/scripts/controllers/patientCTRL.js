'use strict';

/**
 * @ngdoc function
 * @name lifeMonitorDoctorApp.controller:patientCtrl
 * @description
 * # patientCtrl
 * Controller of the lifeMonitorDoctorApp
 */
app.controller('patientCtrl', ['$scope', '$stateParams', 'Patients', function ($scope, $stateParams, Patients){
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
