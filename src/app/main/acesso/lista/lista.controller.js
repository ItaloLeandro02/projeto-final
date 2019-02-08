(function ()
{
    'use strict';

    angular
        .module('app.acesso')
        .controller('ListaAcessoController', ListaAcessoController);

    /** @ngInject */
    function ListaAcessoController(acessoService, $state, $stateParams)
    {
        var vm          = this;
        
        vm.view  = view;

        function view (id){
            $state.go('app.acessoView', {id: id})
        }

        vm.gridService = {
            query : {
                order: 'cnpj',
                limit: 5,
                page: 1
            },
            selected : [],

            loadData : function(){
                return acessoService.getAll().then(function(records){
                    console.log(records.data)
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


