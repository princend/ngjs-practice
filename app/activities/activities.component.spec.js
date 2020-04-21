'use strict';

describe('sorting the list of users', function () {

    beforeEach(module('activities'));


    // beforeEach(inject(function (_$controller_) {
    //     // The injector unwraps the underscores (_) from around the parameter names when matching
    //     $controller = _$controller_;

    //     console.log(controller,'aaa')
    //     var controller = $controller('ActivitiesController', { $scope: $scope });


    // }));

    describe('ActivitiesController', function () {
        var ctrlaaa;

        beforeEach(inject(function ($componentController) {

            //   $httpBackend.expectGET('./phones/phones.json')
            //               .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
            ctrlaaa = $componentController('activities');
        }));

        // it('should create a `phones` property with 2 phones fetched with `$http`', function() {
        //   jasmine.addCustomEqualityTester(angular.equals);

        //   expect(ctrl.phones).toEqual([]);

        //   $httpBackend.flush();
        //   expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        // });

        it('test', function () {

            // console.log(ctrlaaa, 'ctrl')

            expect(1).toBe(1);
        });

    });



    describe('aaa', function () {
        it('sorts in descending order by default', function () {
            console.log('baaaaaa~a')
            var users = 1
            // var sorted = sortUsers(users);
            expect(users).toEqual(1);
        });
    })


});