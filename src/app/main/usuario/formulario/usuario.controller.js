(function ()
{
    'use strict';

    angular
        .module('app.usuario')
        .controller('UsuarioController', UsuarioController);

    /** @ngInject */
    function UsuarioController(usuarioService,usuarioId)
    {
        var vm                                      = this;
        vm.salvar                                   = salvar
        vm.mudarStatus                              = mudarStatus
        vm.tipo                                     = 'password'
        vm.status                                   = 'icon-lock-unlocked-outline'
        vm.mudarSenha                               = mudarSenha 
        vm.permissoes                               = ['Incluir', 'Editar', 'Excluir', 'Visualizar']
        var permissoesUsuario                       = ['01USU', '02USU', '03USU', '04USU']
        var permissoesCliente                       = ['01CLI', '02CLI', '03CLI', '04CLI']
        vm.permissoesSelecionadasClientes           = []
        vm.permissoesSelecionadasUsuarios           = []
        vm.toggle                                   = toggle
        vm.exists                                   = exists
        vm.data                                     = {
            desativado      : false,
            administrador   : false,
            permissoes      : []
        }

        function salvar() {
            if (!vm.data.administrador) {
                vm.permissoesSelecionadasUsuarios.forEach(permissao => {
                    vm.data.permissoes.push(extraiPermissaoUsuarios(permissao))
                });
                vm.permissoesSelecionadasClientes.forEach(permissao => {
                    vm.data.permissoes.push(extraiPermissaoClientes(permissao))
                });
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

        function toggle(item, list) {
            var idx = list.indexOf(item)
            if (idx > -1) {
              list.splice(idx, 1)
            }
            else {
              list.push(item)
            }
        }

        function exists(item, list) {
            return list.indexOf(item) > -1
        }

        vm.permissoesSelecionadasClientes.includes();

        function extraiDataUsuario() {
            let permissoes = []

            permissoesUsuario.forEach(function(item, index) {
                vm.data.permissoes.includes(item) ? permissoes.push(vm.permissoes[index]) : null
            })

            return permissoes
        }

        function extraiDataCliente() {
            let permissoes = []

            permissoesCliente.forEach(function(item, index) {
                vm.data.permissoes.includes(item) ? permissoes.push(vm.permissoes[index]) : null
            })

            return permissoes
        }

        function extraiPermissaoUsuarios(permissao) {
            permissao = permissao =="Incluir" ? "01USU": permissao
            permissao = permissao =="Editar" ? "02USU": permissao
            permissao = permissao == "Excluir" ? "03USU": permissao
            permissao = permissao == "Visualizar" ? "04USU": permissao

            return permissao
        }

        function init(){
            console.log(usuarioId)
            /*if(usuarioId) {
                return usuarioService.getById(usuarioId).then(function(dados) {
                    vm.data = records
                })
            }*/
            if (usuarioId) {
                vm.data = {
                    desativado      : true,
                    administrador   : true,
                    permissoes      : ['01USU', '02USU', '04CLI', '02CLI', '04USU']
                }

                vm.permissoesSelecionadasUsuarios = extraiDataUsuario()
                vm.permissoesSelecionadasClientes = extraiDataCliente()
            }

        }
        init()
        
    }
})();


