'use strict';

angular.module('directives', [])

.directive('chart', [function(){
        var baseWidth = 600;
        var baseHeight = 400;

        return {
            restrict: 'E',
            template: '<canvas></canvas>',
            scope: {
                chartObject: "=value"
            },
            link: function (scope, element, attrs) {
                var canvas = element.find('canvas')[0], context = canvas.getContext('2d'), chart;

                var options = {
                    type:   attrs.type   || "Line",
                    width:  attrs.width  || baseWidth,
                    height: attrs.height || baseHeight
                };

                canvas.width = options.width;
                canvas.height = options.height;
                chart = new Chart(context);

                scope.$watch(function(){ return element.attr('type'); }, function(value){
                      if(!value) return;
                      options.type = value;
                      var chartType = options.type;
                      chart[chartType](scope.chartObject.data, scope.chartObject.options);
                });

                //Update when charts data changes
                scope.$watch(function() { return scope.chartObject; }, function(value) {
                      if(!value) return;
                      var chartType = options.type;
                      chart[chartType](scope.chartObject.data, scope.chartObject.options);
                });
            }
        }
}])
.directive('gridTable', [function(){
  return {
    restrict: 'E',
    templateUrl: '/js/templates/gridTable.html',
    scope:{
      ngModel: '=',
      setColumns: '=',
      id: '@',
      editable: '='
    },
    link: function compile(scope, element, attrs) {

      if(scope.editable) {
        scope.setColumns.push({'title':'Opções'});

        for(var key in scope.ngModel) {
          scope.ngModel[key][scope.setColumns.length - 1] = '<a id="'+scope.ngModel[key]+'" class="btn btn-primary"> Editar <i class="fa fa-camera-retro"></i> </a>';
        }
        console.dir(scope.ngModel[key]);
      }

      scope.alerta = function alerta() {
        alert('asdasd');
      }

      scope.$watch('id', function(id){
        $('#' + id + 'Grid').DataTable({
                "data": scope.ngModel,
                "columns": scope.setColumns
        });
      })

    }
  }  
}])
.directive('coDelete', function () {
    return {
        restrict:"A",
        replace: true,
        template: '<span>'
            + '<button ng-hide="hideIt" type="button" class="btn {{actionClass}} btn-small" ng-click="initIt()"><i class="{{actionIcon}}"></i> {{actionText}}'
            + '</button>'
            + '<button  ng-show="hideIt" type="button" class="btn btn-default btn-small animate-shiny" ng-click="cancelIt()"> {{cancelText ? cancelText: "Cancelar"}}</button>'
            + '<button  ng-show="hideIt" type="button" class="btn btn-success btn-small animate-shiny" ng-click="confirmIt()"> {{confirmText ? confirmText: "Confirmar"}}</button>'
            +  '</span>',
        scope: {
            confirm: '&onConfirm'
        },
        link: function(scope, element, attrs){
            scope.actionText = attrs.actionText;        //@params String @description texto do botão da ação
            scope.actionClass = attrs.actionClass;      //@params String @description classe do botão ação
            scope.actionIcon = attrs.actionIcon;        //@params String @description icone do botão ação
            scope.confirmText = attrs.confirmText;      //@params String @description texto do botão confirmar
            scope.cancelText = attrs.cancelText;        //@params String @description texto do botão cancelar
        },
        controller: function ($scope) {
            $scope.hideIt = false;
            $scope.initIt = function () {
                $scope.hideIt = true;
            };

            $scope.cancelIt = function () {
                $scope.hideIt = false;
            };

            $scope.confirmIt = function () {
                $scope.confirm();
            };

        }
    }
});