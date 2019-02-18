( function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  var resultOptions = {'EMPTY':'Please enter data first',
                        'LESS':'Enjoy!',
                        'MUCH':'Too much!'};

  $scope.lunchList = 'List comma separated dishes you usually have for lunch';
  $scope.resultMessage = '';

  $scope.checkShoppingList = function () {
    var totalItemCount = countItemsInString($scope.lunchList);
    console.log(totalItemCount);
    $scope.resultMessage = getResultOption(totalItemCount);
  };

  function countItemsInString(lunchList) {
    if(lunchList.length <= 0) return 0;
    var lunchItems = [];
    var splitList = lunchList.split(',');
    for(var item in splitList) {
      console.log(splitList[item]);
      if(splitList[item].replace(/ /g, '').length > 0) {
        lunchItems.push(splitList[item]);
      }
    }
    return lunchItems.length;
  }

  function getResultOption(totalItemCount) {
    if(totalItemCount <= 0) return resultOptions['EMPTY'];
    if(totalItemCount <= 3) return resultOptions['LESS'];
    return resultOptions['MUCH'];
  }

}

})();
