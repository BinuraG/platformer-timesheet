'use strict';

angular.module('myApp.timelog').factory('timelogService',
    ['$http', function ($http) {
        var restRoot = 'timelog/',
            service = {
            getTimelog: function (userId, periodId) {
                //return $http.get(url.restRoot + userId + '?periodId=' + periodId);
                return {
                    '_id': '12312312312',
                    'userId': '13',
                    'createdOn': '01/01/2016',
                    'updatedOn': '01/01/2016',
                    'timelog': [
                        {
                            'date': '01/01/2015',
                            'dateId': 1,
                            'time': 6,
                            'assignmentId': 1,
                            'comment': 'Save the world!'
                        },
                        {
                            'date': '01/02/2015',
                            'dateId': 2,
                            'time': 8,
                            'assignmentId': 2,
                            'comment': 'Save the world2!'
                        }
                    ],
                    'reporting': [
                        {
                            'projectId': '1',
                            'periodId': '1',
                            'description': 'Everything is wrong!'
                        }
                    ]
                }
            },
            getTimelogKeys: function () {
                return {
                    'date': 'Date',
                    'dateId': 'Assigment',
                    'time': 'Time',
                    'comment': 'Comment'
                }
            },
            updateTimelog: function (userId, periodId) {
                //return $http.put(url.restRoot + userId + '?periodId=' + periodId);
            }
        };

        return service;
    }
    ]);
