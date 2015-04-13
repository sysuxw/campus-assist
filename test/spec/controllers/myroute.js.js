'use strict';

describe('Controller: MyrouteJsCtrl', function () {

  // load the controller's module
  beforeEach(module('campusAssistApp'));

  var MyrouteJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyrouteJsCtrl = $controller('MyrouteJsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
