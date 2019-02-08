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
                return logService.getAll().then(function(records){
                    console.log(records.data);
                    
                    vm.data = records.data
                })   
            }
        }

        function init(){
            vm.gridService.loadData()
        }
        init()
        
    }
})();


