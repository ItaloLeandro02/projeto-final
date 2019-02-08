(function ()
{
    'use strict';

    angular
        .module('app.usuario')
        .controller('ListaUsuarioController', ListaUsuarioController);

    /** @ngInject */
    function ListaUsuarioController(usuarioService, $state, $stateParams, $mdDialog)
    {
        var vm          = this;
        vm.editar       = editar;
        vm.view         = view;

        function editar(usuarioId) {
            $state.go('app.editarUsuario', {id: usuarioId})
        }

        vm.gridService = {
            query : {
                order: 'nome',
                limit: 5,
                page: 1
            },
            selected : [],

            loadData : function(){
                return usuarioService.getAll().then(function(records){
                    vm.data = records.data
                }).catch((error)=>{
                    $state.go('app.usuario')
                })
            }
        }
        
        function view(usuarioId){
            $state.go('app.viewUsuario', {id : usuarioId})
        }

        function init(){
            vm.gridService.loadData()
        }
        init()
        
    }
})();


