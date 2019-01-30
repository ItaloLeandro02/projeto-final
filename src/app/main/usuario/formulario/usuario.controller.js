(function ()
{
    'use strict';

    angular
        .module('app.usuario')
        .controller('UsuarioController', UsuarioController);

    /** @ngInject */
    function UsuarioController(usuarioService, usuarioId)
    {
        var vm      = this;
        vm.salvar   = salvar

        function salvar() {
            console.log(vm.nome, vm.administrador, vm.desativado)
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
                    vm.data = records
                })   
            }
        }

        function init(){
            /*if(usuarioId) {
                return usuarioService.getById(usuarioId).then(function(dados) {
                    vm.data = records
                })
            }*/
        }
        init()
        
    }
})();


