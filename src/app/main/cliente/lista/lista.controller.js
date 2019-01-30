(function ()
{
    'use strict';

    angular
        .module('app.cliente')
        .controller('ListaClienteController', ListaClienteController);

    /** @ngInject */
    function ListaClienteController(clienteService,$state)
    {
        var vm = this;

        vm.novoCliente = novoCliente;
        vm.editar = editar;
        vm.view = view;

        vm.gridService = {
            query : {
                order: 'nome',
                limit: 5,
                page: 1
            },
            selected : [],

            loadData : function(){
                return clienteService.getDataMockup().then(function(records){
                    console.log(records)
                    vm.data = records
                })   
            }
        }

        function init(){
            vm.gridService.loadData()
        }
        init()

        function novoCliente(){
            $state.go('app.novoCliente')
        }

        function editar(clienteId){
            $state.go('app.editaCliente', {id : clienteId})
        }

        function view(clienteId){
            $state.go('app.viewCliente', {id : clienteId})
        }
        
    }
})();


