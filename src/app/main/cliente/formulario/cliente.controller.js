(function ()
{
    'use strict';

    angular
        .module('app.cliente')
        .controller('ClienteController', ClienteController);

    /** @ngInject */
    function ClienteController(clienteService,$state, clienteId)
    {
        
        var vm = this;
        vm.novoCliente = novoCliente;
        vm.salvar = salvar;

        function init(){
            if (clienteId) {
                clienteService.getById(clienteId).then(function(resposta){
                    console.log(resposta.data)
                    return vm.data = resposta.data
                })
            }
        }
        init()

        function novoCliente(){
            $state.go('app.novoCliente')
        }

        function salvar(){
            
            var newCliente = {
                numeroSerie : vm.numeroSerie,
                cpf  : vm.cpf,
                cnpj : vm.cnpj,
                contrato: vm.contrato,
                status : vm.status,
                androidGourmet: vm.gourmet,
                numDispositivo: vm.numDispositivos,
                androidPedidos: vm.pedidos,
                numDispositivosPedidos: vm.numDispositivosPedidos
            }

            let sucesso = function(resposta){
                toastr.success('Cliente adicionado com exito','TUDO CERTO :)')
                $state.go('app.cliente')
            }

            let erro = function(resposta) {
                console.log(resposta)
            }

            clienteService.save(newCliente).then(sucesso,erro)
        }
        
    }
})();


