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
        permissoesUsuario                           = ['01USU', '02USU', '03USU', '04USU']
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
/*
        function extraiData(permissao, arrayPermisoes) {
            permissao = permissao =="Incluir" ? "01USU": permissao
            permissao = permissao =="Editar" ? "02USU": permissao
            permissao = permissao == "Excluir" ? "03USU": permissao
            permissao = permissao == "Visualizar" ? "04USU": permissao

            return permissao
        }
*/
        function extraiPermissaoUsuarios(permissao) {
            permissao = permissao =="Incluir" ? "01USU": permissao
            permissao = permissao =="Editar" ? "02USU": permissao
            permissao = permissao == "Excluir" ? "03USU": permissao
            permissao = permissao == "Visualizar" ? "04USU": permissao

            return permissao
        }

        function extraiPermissaoClientes(permissao) {
            permissao = permissao =="Incluir" ? "01CLI": permissao
            permissao = permissao =="Editar" ? "02CLI": permissao
            permissao = permissao == "Excluir" ? "03CLI": permissao
            permissao = permissao == "Visualizar" ? "04CLI": permissao

            return permissao
        }

        function retornarPermissaoCliente(permissao) {
            permissao = permissao == "01CLI" ? "Incluir": permissao
            permissao = permissao == "02CLI" ? "Editar": permissao
            permissao = permissao == "03CLI" ? "Excluir": permissao
            permissao = permissao == "04CLI" ? "Visualizar": permissao

            return permissao
        }
        
        function retornarPermissaoUsuario(permissao) {
            permissao = permissao == "01USU" ? "Incluir": permissao
            permissao = permissao == "02USU" ? "Editar": permissao
            permissao = permissao == "03USU" ? "Excluir": permissao
            permissao = permissao == "04USU" ? "Visualizar": permissao

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
                    permissoes      : ['01USU', '02USU', '04CLI', '02CLI']
                }

                vm.data.permissoes.forEach(permissao => {
                    vm.permissoesSelecionadasClientes.push(retornarPermissaoCliente(permissao))
                    vm.permissoesSelecionadasUsuarios.push(retornarPermissaoUsuario(permissao))
                })
            }
        }
        init()
        
    }
})();


