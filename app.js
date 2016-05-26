// create angular module and inject firebase
angular.module('scheduleApp', ['firebase'])
.controller('mainController', function ($scope, $firebaseObject) {

  // connect to firebase
  var ref = new Firebase('https://angular-firebase-17d1a.firebaseio.com/days');
  // sync as object
  var fb = $firebaseObject(ref);
  
  // three way data binding
  fb.$bindTo($scope, 'days');

    // function to set the default data
    $scope.reset = function () {

      ref.set({
        monday: {
          name: 'Monday',
          slots: {
            0900: {
              time: '9:00am',
              booked: false,
            },
            0110: {
              time: '11:00am',
              booked: false,
            }
          }
        },
        tuesday: {
            name: 'Tuesday',
            slots: {
                0900: {
                    time: '9:00am',
                    booked: false,
                },
                0110: {
                    time: '11:00am',
                    booked: false,
                }
            }
        }
      });
      
    };
});
