(function ()
{
    'use strict';

    angular
        .module('app.log')
        .controller('ListaLogController', ListaLogController);

    /** @ngInject */
    function ListaLogController(logService, $state, $stateParams,siafUtils,$mdDialog)
    {
        var vm          = this;
        let acoes = siafUtils.getAcoes();

        vm.gridService = {
            query : {
                order: 'acao',
                limit: 5,
                page: 1
            },
            selected : [],

            loadData : function(){
                return logService.getAll().then(function(records){
                    vm.data = records.data.map(element => {
                        element.rotina = element.rotina +' - '+ acoes[element.rotina]
                        return element
                    });
                })   
            }
        }

        vm.openModal = function(ev) {
            $mdDialog.show({
              controller: 'ListaLogController',
              controllerAs: 'vm',
              templateUrl: 'app/main/log/lista/dialog.log.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
            })
        }
        
        vm.hide = function() {
            $mdDialog.hide();
        };

        function init(){
            vm.gridService.loadData()
        }
        init()
        
    }
})();


