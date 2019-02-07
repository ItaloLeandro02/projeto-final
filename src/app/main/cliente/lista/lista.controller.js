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
        //vm.toggleLeft = buildToggler('left');


        vm.gridService = {
            query : {
                order: 'nome',
                limit: 5,
                page: 1
            },
            selected : [],

            loadData : function(){
                  
                return clienteService.getAll().then(function(records){
                    vm.data = records.data.rows
                }).catch((error)=>{
                    toastr.error(error.data.message,"ATENÇÃO")
                    $state.go('app.sample')
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
        
        /*function buildToggler(componentId) {
            console.log('to aqui')
            return function() {
              $mdSidenav(componentId).toggle();
            };
          }*/
    }
})();


