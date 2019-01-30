(function ()
{
    'use strict';

    angular
        .module('app.log')
        .controller('ListaLogController', ListaLogController);

    /** @ngInject */
    function ListaLogController(logService, $state, $stateParams)
    {
        var vm          = this;
        

        vm.gridService = {
            query : {
                order: 'acao',
                limit: 5,
                page: 1
            },
            selected : [],

            loadData : function(){
                return logService.getDataMockup().then(function(records){
                    vm.data = records
                })   
            }
        }

        function init(){
            vm.gridService.loadData()
        }
        init()
        
    }
})();


