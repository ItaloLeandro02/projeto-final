(function ()
{
    'use strict';

    angular
        .module('app.usuario')
        .controller('UsuarioController', UsuarioController);

    /** @ngInject */
    function UsuarioController(usuarioService,usuarioId,siafUtils)
    {
        var vm                                      = this;

        var rotinas = siafUtils.getRotinas(); 
        vm.rotinasUsuario = rotinas.filter(function(item){ return item.valor.substr(2,item.valor.length) == 'USU' });
        vm.rotinasCliente = rotinas.filter(function(item){ return item.valor.substr(2,item.valor.length) == 'CLI' });
        
        vm.salvar                                   = salvar
        vm.mudarStatus                              = mudarStatus
        vm.tipo                                     = 'password'
        vm.status                                   = 'icon-lock-unlocked-outline'
        vm.mudarSenha                               = mudarSenha
        
        vm.data                                     = {
            desativado      : false,
            administrador   : false,
            permissoes      : []
        }

        function salvar() {
            if (!vm.data.administrador) {
                vm.data.permissoes = [];
                vm.data.permissoes = vm.data.permissoes.concat(vm.rotinasUsuario.filter(function(rotina) { return rotina.checked }));
                vm.data.permissoes = vm.data.permissoes.concat(vm.rotinasCliente.filter(function(rotina) { return rotina.checked }));
                vm.data.permissoes = vm.data.permissoes.map(function(rotina){ return rotina.valor });
            }

            console.log(vm.data.nome, vm.data.administrador, vm.data.desativado, vm.data.permissoes)
        }

        function mudarStatus(status) {
            if (status == 'icon-lock-unlocked-outline') {
                vm.tipo    = 'text';
                vm.status  = 'icon-lock-outline';
            }
            else {
                vm.tipo    = 'password';
                vm.status  = 'icon-lock-unlocked-outline';
            }
        }

        function mudarSenha() {
            console.log(vm.data.senha, vm.data.novaSenha,vm.data.confirmaSenha)
            //Deve verificar se a senha informada pertence ao email do usuario logado atualmente
            //A API deve verificar a senha digitada como o banco e vereifca a nova senha juntamente com sua confirmação
        }

        function preparaVisualizacao() {
            vm.data.permissoes.forEach(function(permissao){
                if (permissao.rotina.substr(2,permissao.rotina.length) == 'USU') {
                    var rotina = vm.rotinasUsuario.find(function(rotinaUsuario){ return permissao.rotina == rotinaUsuario.valor });
                    rotina ? rotina.checked = true : null
                } else {
                    var rotina = vm.rotinasCliente.find(function(rotinaCliente){ return permissao.rotina == rotinaCliente.valor });
                    rotina ? rotina.checked = true : null
                }
            })
        }

        function init(){
            if (usuarioId) {
                return usuarioService.getById(usuarioId).then(function(records){
                    vm.data = records.data;

                    preparaVisualizacao();
                }).catch((error)=>{
                    toastr.error(error.data.message,'ATENÇÃO')
                    $state.go('app.sample')
                })
            }
        }
        init()
    }
})();