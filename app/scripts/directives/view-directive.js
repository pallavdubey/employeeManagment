'use strict';
angular.module('employeeManagement')
.directive('viewDirective', function() {
      return {
        restrict: 'E',
        scope: {
            selectedView: '=selectedView',
            employeeDetails: '=employeeDetails',
            sortOrderBy: '=sortOrderBy',
            filterValue: '=filterValue'
        },
        templateUrl:'app/views/view-employee.html',
        link: function($scope) {
            $scope.getDisplayImage = function(gender){
                switch(gender.toLowerCase()) {
                    case 'male':
                        return 'app/images/male-icon.png';
                    case 'female':
                        return 'app/images/female-icon.png';
                    default:
                        return 'app/images/male-icon.png';
                } 
            }
        }
      };
    }
  );