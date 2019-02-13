(function ()
{
    'use strict';

    angular
        .module('app.cliente')
        .controller('ClienteController', ClienteController);

    /** @ngInject */
    function ClienteController(clienteService,$state, clienteId)
    {
        
        var vm          = this;
        vm.novoCliente  = novoCliente;
        vm.salvar       = salvar;

        function init(){
            if (clienteId) {
                clienteService.getById(clienteId).then(function(resposta){
                    resposta.data.dataHoraAcesso = new Date(resposta.data.dataHoraAcesso).toLocaleString();
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
                if(clienteId) {
                    toastr.info("Informações atualizadas com sucesso!")
                } else {
                    toastr.success("Cliente incluido com sucesso!")
                }
                $state.go('app.cliente')
            }

            let erro = function(resposta) {
                resposta.data.errors.forEach(erro => {
                    toastr.warning(erro)
                });
            }

            newCliente.id = clienteId;
            clienteService.save(newCliente).then(sucesso,erro)
        }
        
    }
})();


