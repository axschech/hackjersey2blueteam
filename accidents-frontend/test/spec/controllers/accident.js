'use strict';

describe('Controller: AccidentCtrl', function () {

  // load the controller's module
  beforeEach(module('accidentsFrontendApp'));

  var AccidentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccidentCtrl = $controller('AccidentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
