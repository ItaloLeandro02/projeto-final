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
        vm.permissoes                               = ['Incluir', 'Editar', 'Consultar']
        vm.permissoesSelecionadasClientes           = []
        vm.permissoesSelecionadasUsuarios           = []
        vm.toggle                                   = toggle
        vm.exists                                   = exists
        vm.data                                     = {}


        function salvar() {
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

        vm.gridService = {
            query : {
                order: 'nome',
                limit: 5,
                page: 1
            },
            selected : [],

            loadData : function(){
                return usuarioService.getDataMockup().then(function(records){
                    console.log(records)
                    vm.data = records
                })   
            }
        }

        function init(){
            console.log(usuarioId)
            /*if(usuarioId) {
                return usuarioService.getById(usuarioId).then(function(dados) {
                    vm.data = records
                })
            }*/
            vm.gridService.loadData()
        }
        init()
        
    }
})();


