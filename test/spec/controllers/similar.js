'use strict';

describe('Controller: SimilarCtrl', function () {

  // load the controller's module
  beforeEach(module('coursExoApp'));

  var SimilarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SimilarCtrl = $controller('SimilarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
