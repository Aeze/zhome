'use strict';

angular.module('zhomeApp')
  .controller('MainCtrl', function ($scope, hotkeys) {
    $scope.volume = 5;

    hotkeys.add({
      combo: 's',
      description: 'Searchbox',
      callback: function() {
        document.getElementById('qinput').focus();
      }
    });

    hotkeys.add({
      combo: 'g',
      description: 'G-mail',
      callback: function() {
        window.location.href = 'http://www.gmail.com';
      }
    });

    hotkeys.add({
      combo: 'y',
      description: 'Youtube',
      callback: function() {
        window.location.href = 'http://www.youtube.com';
      }
    });

    hotkeys.add({
      combo: 'r',
      description: 'Hckrnews',
      callback: function() {
        window.location.href = 'http://www.hckrnews.com';
      }
    });

    hotkeys.add({
      combo: 'd',
      description: 'Google Docs',
      callback: function() {
        window.location.href = 'http://docs.google.com';
      }
    });


    

  });
