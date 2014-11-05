'use strict';

/**
 * @ngdoc function
 * @name lifeMonitorDoctorApp.factory:Prescription
 * @description
 * # Prescription
 * Factory of prescription informations
 */
app.factory('Prescriptions', ['$resource', '$stateParams', function($resource, $stateParams){
	var Prescriptions = $resource('http://doritosjenkins.cloudapp.net:8000/patients/:id/file/prescriptions', {id:$stateParams.id});
	return Prescriptions;
}]);