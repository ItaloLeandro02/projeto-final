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
                return logService.getAll(vm.dataInicial,vm.dataFinal).then(function(records){
                    vm.data = records.data.map(element => {
                        element.rotina = element.rotina +' - '+ acoes[element.rotina]
                        return element
                    });
                })   
            }
        }

        vm.openModal = function(ev,recordLog) {
            
            function logController (recordLog,$mdDialog) {
                var vm = this;
                vm.record = recordLog
                let data = new Date(vm.record.dataHora)
                vm.data = data.toLocaleString()

                vm.hide = function() {
                    $mdDialog.hide();
                };

            }
            
            $mdDialog.show({
              controller: logController,
              controllerAs: 'vm',
              templateUrl: 'app/main/log/lista/dialog.log.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
              locals: {
                  recordLog : recordLog
              }
            })
        }

        function init(){
            vm.dataInicial = new Date();
            vm.dataFinal = new Date();
            vm.gridService.loadData();
        }
        init()
        
    }
})();


