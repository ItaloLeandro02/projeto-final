(function ()
{
    'use strict';

    angular
        .module('app.usuario')
        .controller('UsuarioController', UsuarioController);

    /** @ngInject */
    function UsuarioController(usuarioId,usuarioService,siafUtils, $state)
    {
        var vm              = this;

        var rotinas         = siafUtils.getRotinas(); 
        vm.rotinasUsuario   = rotinas.filter(function(item){ return item.valor.substr(2,item.valor.length) == 'USU' });
        vm.rotinasCliente   = rotinas.filter(function(item){ return item.valor.substr(2,item.valor.length) == 'CLI' });
        vm.rotinasLog       = rotinas.filter(function(item){ return item.valor.substr(2,item.valor.length) == 'LOG' });
        vm.rotinasAcesso    = rotinas.filter(function(item){ return item.valor.substr(2,item.valor.length) == 'ACE' });
        
        vm.salvar                                   = salvar;
        vm.mudarStatus                              = mudarStatus;
        vm.tipo                                     = 'password';
        vm.status                                   = 'icon-lock-unlocked-outline';
        vm.mudarSenha                               = mudarSenha;
        vm.alterarSenha                             = alterarSenha;


        vm.data = {
            desativado      : false,
            administrador   : false,
            permissoes      : []
        }

        

        function init(){
            console.log(usuarioId)
            usuarioId = parseInt(usuarioId,10);
            console.log(usuarioId)
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

        function salvar() {
            if (!vm.data.administrador) {
                vm.data.permissoes = [];
                var object = {}
                vm.data.permissoes = vm.data.permissoes.concat(vm.rotinasUsuario.filter(function(rotina) { return  rotina.checked }));
                vm.data.permissoes = vm.data.permissoes.concat(vm.rotinasCliente.filter(function(rotina) { return  rotina.checked }));
                vm.data.permissoes = vm.data.permissoes.concat(vm.rotinasLog.filter(function(rotina) { return  rotina.checked }));
                vm.data.permissoes = vm.data.permissoes.concat(vm.rotinasAcesso.filter(function(rotina) { return  rotina.checked }));
                vm.data.permissoes = vm.data.permissoes.map(function(rotina){ object.rotina = rotina.valor; return object });
            }

            let sucesso = function(resposta){
                if (usuarioId) {
                    toastr.info(resposta.message)
                } else {
                    toastr.success(resposta.message)
                }
                $state.go('app.usuario')
            }

            let erro = function(resposta) {
                error.data.errors.forEach(erro => {
                    toastr.error(erro)
                })
            }

            usuarioService.save(vm.data).then(sucesso,erro)
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

        function alterarSenha() {
            $state.go('app.mudarSenha');
        }

        function mudarSenha() {
            console.log(vm.data.senha, vm.data.novaSenha,vm.data.confirmaSenha)
            var changePasswordModel = {}
                changePasswordModel.senha
        }

        function preparaVisualizacao() {
            vm.data.permissoes.forEach(function(permissao){
                if (permissao.rotina.substr(2,permissao.rotina.length) == 'USU') {
                    var rotina = vm.rotinasUsuario.find(function(rotinaUsuario){ return permissao.rotina == rotinaUsuario.valor });
                    rotina ? rotina.checked = true : null
                }  if (permissao.rotina.substr(2,permissao.rotina.length) == 'CLI') {
                    var rotina = vm.rotinasCliente.find(function(rotinaCliente){ return permissao.rotina == rotinaCliente.valor });
                    rotina ? rotina.checked = true : null
                } if (permissao.rotina.substr(2,permissao.rotina.length) == 'ACE') {
                    var rotina = vm.rotinasAcesso.find(function(rotinaAcesso){ return permissao.rotina == rotinaAcesso.valor });
                    rotina ? rotina.checked = true : null
                } if (permissao.rotina.substr(2,permissao.rotina.length) == 'LOG') {
                    var rotina = vm.rotinasLog.find(function(rotinaLog){ return permissao.rotina == rotinaLog.valor });
                    rotina ? rotina.checked = true : null
                }
            })
        }
        
    }
})();