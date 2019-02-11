(function ()
{
    'use strict';

    angular
        .module('app.usuario')
        .controller('ListaUsuarioController', ListaUsuarioController);

    /** @ngInject */
    function ListaUsuarioController(usuarioService, $state, $stateParams, $mdDialog)
    {
        var vm              = this;
        vm.editar           = editar;
        vm.view             = view;
        vm.excluir          = excluir;
        vm.logPagination    = logPagination;

        function editar(usuarioId) {
            $state.go('app.editarUsuario', {id: usuarioId})
        }

        vm.gridService = {
            query : {
                order: "nome",
                limit: 10,
                page: 1,
                options: [5, 10, 15]
            },
            selected : [],
                        
            loadData : function(){
                return usuarioService.getAll().then(function(records){
                    vm.data          = records.data;
                }).catch((error)=>{
                    $state.go('app.usuario')
                })
            }
        }

        vm.options = {
            boundaryLinks: true,
            rowSelection: true
        };

        function logPagination(page, limit) {
            console.log('page: ', page);
            console.log('limit: ', limit);
        }
        
        function view(usuarioId){
            $state.go('app.viewUsuario', {id : usuarioId})
        }

        function excluir(ev,usuario){
            let confirmacao = $mdDialog.confirm()
                  .title('A	guardando confirmação')
                  .textContent('Confirma a exclusão do usuário ' + usuario.nome)
                  .ariaLabel('Msg interna do botao')
                  .targetEvent(ev)
                  .ok('Sim')
                  .cancel('Não');
            $mdDialog.show(confirmacao).then(function() {
                  excluirUsuario(usuario.id)
            });
        }        
    
        function excluirUsuario(usuarioId){
            let sucesso = function(resposta){
                if (resposta.success) {
                    toastr.success(resposta.message)
                }
                $state.go('app.usuario')
            }
            let erro = function(resposta) {
                error.data.errors.forEach(erro => {
                    toastr.error(erro)
                })
            }

            usuarioService.delete(usuarioId).then(sucesso,erro)
        }

        function init(){
            vm.gridService.loadData()
        }
        init()
        
    }
})();


