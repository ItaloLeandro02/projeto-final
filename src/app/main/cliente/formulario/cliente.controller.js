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
                numeroSerie : vm.data.numeroSerie,
                cpf  : vm.data.cpf,
                cnpj : vm.data.cnpj,
                contrato: vm.data.contrato,
                status : vm.data.status,
                androidGourmet: vm.data.androidGourmet,
                numDispositivos: vm.data.numDispositivos,
                androidPedidos: vm.data.androidPedidos,
                numDispositivosPedidos: vm.data.numDispositivosPedidos,
                observacao: vm.data.observacao
            }

            let sucesso = function(resposta){
                toastr.success('Cliente adicionado com exito','TUDO CERTO :)')
                $state.go('app.cliente')
            }

            let erro = function(resposta) {
                console.log(resposta)
            }

            newCliente.id = clienteId;
            clienteService.save(newCliente).then(sucesso,erro)
        }
        
    }
})();


