(function ()
{
    'use strict';

    angular
        .module('app.cliente')
        .controller('ClienteController', ClienteController);

    /** @ngInject */
    function ClienteController(clienteService,$state)
    {
        var vm = this;

        vm.novoCliente = novoCliente;
        vm.salvar = salvar;


        function init(){
            /*if (clienteId) {
                clienteService.getById(clienteId).then(function(resposta){
                    vm.ds = resposta.data
                })
            }*/
        }
        init()

        function novoCliente(){
            $state.go('app.novoCliente')
        }

        function salvar(){
            var newCliente = {
                nome : vm.nome,
                cpf  : vm.cpf,
                cnpj : vm.cnpj,
                contrato: vm.contrato
            }

           
        }
        
    }
})();


