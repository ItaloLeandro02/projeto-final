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
        vm.rotinasUsuario   = atribuiRotinas(rotinas, 'USU')
        vm.rotinasCliente   = atribuiRotinas(rotinas, 'CLI')
        vm.rotinasLog       = atribuiRotinas(rotinas, 'LOG')
        vm.rotinasAcesso    = atribuiRotinas(rotinas, 'ACE')
        
        vm.salvar                                   = salvar;
        vm.mudarSenha                               = mudarSenha;
        vm.alterarSenha                             = alterarSenha;


        vm.data = {
            desativado      : false,
            administrador   : false,
            permissoes      : []
        }

        function init(){
            usuarioId = parseInt(usuarioId,10);
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
        
        function atribuiRotinas(rotinas, filtro) {
            return rotinas.filter(function(item){ return item.valor.substr(2,item.valor.length) == filtro });
        }

        function retornarPermissoesSelecionadas(rotinas) {
            return vm.data.permissoes.concat(rotinas.filter(function(rotina) { return  rotina.checked }));
        }

        function filtraRotinas(permissao, rotinas, filtro) {
            if (permissao.rotina.substr(2,permissao.rotina.length) == filtro) {
                var rotina = rotinas.find(function(item){ return permissao.rotina == item.valor });
                rotina ? rotina.checked = true : null
            }
        }

        function salvar() {
            if (!vm.data.administrador) {
                vm.data.permissoes = [];
                var object = {};
                vm.data.permissoes = retornarPermissoesSelecionadas(vm.rotinasUsuario);
                vm.data.permissoes = retornarPermissoesSelecionadas(vm.rotinasCliente);
                vm.data.permissoes = retornarPermissoesSelecionadas(vm.rotinasLog);
                vm.data.permissoes = retornarPermissoesSelecionadas(vm.rotinasAcesso);
                vm.data.permissoes = vm.data.permissoes.map(function(rotina){ object.rotina = rotina.valor; return object });
            }

            let sucesso = function(resposta){
                if (usuarioId) toastr.info(resposta.message)
                toastr.success(resposta.message)
                $state.go('app.usuario')
            }

            let erro = function(resposta) {
                error.data.errors.forEach(erro => {
                    toastr.error(erro)
                })
            }

            usuarioService.save(vm.data).then(sucesso,erro)
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