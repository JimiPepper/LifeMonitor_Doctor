

// Unit test of controller patientsCtrl
describe('Controller: patientsCtrl', function () {

  var $scope,
      $ctrl,
      mockedPatientsFactory;

  // load the module
  beforeEach(module('lifeMonitorDoctorApp', function($provide) {
    //Mock PatientsFactory 
    mockedPatientsFactory = {
      getPatients: jasmine.createSpy()
    };

    // Link Patients to mockedPatientsFactory
    $provide.value('Patients', mockedPatientsFactory);
  }));


  beforeEach(inject(function(_$rootScope_, _$controller_) {
    $scope = _$rootScope_;
    $ctrl = _$controller_('patientsCtrl', {$scope: $scope});
  }));


  it('should attach a list of awesomeThings to the scope', function() {
      ctrl.loadPatients();
      expect(mockedPatientsFactory.getPatients).toHaveBeenCalled();
  });
});
