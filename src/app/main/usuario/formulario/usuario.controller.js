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
            
            let sucesso = function(resposta){
                if (resposta.sucess) {
                    toastr.success('Senha alterada com sucesso','Tudo Certo')
                    $state.go('app.usuario')
                }
            }

            let erro = function(error){
                toastr.error(error.data.message,'Atenção')
            }
            
            var changePasswordModel = {
                senhaAtual : vm.data.senha,
                novaSenha : vm.data.novaSenha,
                confirmaSenha : vm.data.confirmaSenha 
            }
            usuarioService.mudarSenha(changePasswordModel).then(sucesso,erro)
        }

        function preparaVisualizacaoRotinas(permissao,rotinas,sufixo){
            if (permissao.rotina.substr(2,permissao.rotina.length) == sufixo) {
                var rotina = rotinas.find(function(item){ return permissao.rotina == item.valor });
                rotina ? rotina.checked = true : null
            }                 
        }
        
        
        function preparaVisualizacao() {
            vm.data.permissoes.forEach(function(permissao){
                preparaVisualizacaoRotinas(permissao,vm.rotinasUsuario,'USU');
                preparaVisualizacaoRotinas(permissao,vm.rotinasCliente,'CLI');
                preparaVisualizacaoRotinas(permissao,vm.rotinasAcesso,'ACE');
                preparaVisualizacaoRotinas(permissao,vm.rotinasLog,'LOG');
            })
        }
        
    }
})();