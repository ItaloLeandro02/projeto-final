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