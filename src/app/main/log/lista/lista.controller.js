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
        vm.filtrar      = filtrar;
        vm.carregaUsuarios = carregaUsuarios;
        let acoes = siafUtils.getAcoes();
        
        vm.query = {
            text : ''
        }

        function init(){
            vm.gridService.loadData();
        }
        

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
        init()

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

        function filtrar(dataini,datafim){
            logService.getAll(dataini,datafim).then(function(records){
                vm.data = records.data.map(element => {
                    element.rotina = element.rotina +' - '+ acoes[element.rotina]
                    return element
                });
            })   
        }

        function carregaUsuarios(){
            return logService.getUsuarios().then(function(resposta){
                return resposta.data;
            })
        }
        
        
    }
})();


