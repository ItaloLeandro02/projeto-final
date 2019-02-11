(function ()
{
    'use strict';

    angular
        .module('app.cliente')
        .controller('ListaClienteController', ListaClienteController);

    /** @ngInject */
    function ListaClienteController(clienteService,$state,$mdSidenav)
    {
        var vm = this;

        vm.novoCliente = novoCliente;
        vm.editar = editar;
        vm.view = view;
        vm.logPagination = logPagination;

        vm.gridService = {
            query : {
                order: "numeroserie",
                limit: 10,
                page: 1,
                options: [5, 10, 15]
            },
            selected : [],

            loadData : function(){

                return clienteService.getAll().then(function(records){
                    vm.data         = records.data.rows;
                    vm.data.count   = records.data.count;
                }).catch((error)=>{
                    toastr.error(error.data.message,"ATENÇÃO")
                    $state.go('app.sample')
                })
            }
        }

        function logPagination(page, limit) {
            console.log('page: ', page);
            console.log('limit: ', limit);

            return clienteService.getAll(page, limit).then(function(records){
                vm.data         = records.data.rows;
                vm.data.count   = records.data.count;
            })
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
        
        /*function buildToggler(componentId) {
            console.log('to aqui')
            return function() {
              $mdSidenav(componentId).toggle();
            };
          }*/
    }
})();


