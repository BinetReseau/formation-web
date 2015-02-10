'use strict';

describe('Controller: CoursCtrl', function () {

  // load the controller's module
  beforeEach(module('fBrweb1App'));

  var CoursCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoursCtrl = $controller('CoursCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
