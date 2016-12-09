'use strict';

/**
 * @ngdoc function
 * @name employeeManagement.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the employeeManagement
 */

angular.module('employeeManagement')
.controller('mainCtrl',function($scope, $filter, employeeDetailsService){
    $scope.filterValue = '';
    $scope.selectedSortOrder = 'name';
    $scope.sortByOnView = 'Name';
    $scope.active = true;
    
 var onInit = function(){
 	$scope.toggle = 1 ;
    $scope.employeeData = employeeDetailsService.getEmployeeDetails();
 };

 $scope.addEmployee = function(){
     //var addEmployee = true;
     $scope.newEmployeeDetails = employeeDetailsService.createNewEmployeeForm();
 };
 $scope.submitEmployeeDetails =  function(){
     employeeDetailsService.AddEmployeeDetails(angular.copy($scope.newEmployeeDetails));
 };

 $scope.updateView = function(viewType){
     $scope.viewType = viewType;
 };

 $scope.updateView = function(toggleOption){
 	$scope.active=false;
 	$scope.toggle = toggleOption;
    $scope.sortByOnView = 'Name';
 };

 $scope.sortOrderBy = function(sortOrder, selectedOnView){
 	$scope.selectedSortOrder = sortOrder;
 	$scope.sortByOnView = selectedOnView;
 };
 onInit();
 
});