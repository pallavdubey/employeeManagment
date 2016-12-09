'use strict';
angular.module('employeeManagement')
.service('employeeDetailsService', function() {
 var self = this;
 self.employeeData = {
    'employeeDetails':[
        {
        'employeeId':'10931741',
        'name':'Rachel Smith',
        'gender':'Female',
        'emailId': 'rachel.smith@gmail.com', 
        'dateOfBirth':'01-04-1987',
        'dateOfJoining':'08-05-2013',
        'department':'IDC',
        'title':'Developer',
        'salary':'50,000'
        },
        {
        'employeeId':'10931742',
        'name':'Harold Soans',
        'gender':'male',
        'emailId': 'harold.soans@gmail.com', 
        'dateOfBirth':'07-12-1980',
        'dateOfJoining':'08-01-2014',
        'department':'BPO',
        'title':'Manager',
        'salary':'90,000'
        },
        {
        'employeeId':'10931740',
        'name':'Luis Pavel',
        'gender':'male',
        'emailId': 'l.pavel@gmail.com', 
        'dateOfBirth':'12-3-1990',
        'dateOfJoining':'08-01-2014',
        'department':'XXX',
        'title':'Sr.Developer',
        'salary':'70,000'
        }
    ]
};
self.createNewEmployeeForm = function(){
    return {
        'employeeId':'',
        'name':'',
        'gender':'',
        'emailId':'',        
        'dateOfBirth':'',
        'dateOfJoining':'',
        'department':'',
        'title':'',
        'salary':'' 
        };
};
 self.getEmployeeDetails = function(){
 	return self.employeeData.employeeDetails;
 };

 self.AddEmployeeDetails = function(newEmployeeDetails){
     self.employeeData.employeeDetails.push(newEmployeeDetails);
 };
});