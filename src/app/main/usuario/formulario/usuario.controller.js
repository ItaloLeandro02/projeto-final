(function ()
{
    'use strict';

    angular
        .module('app.usuario')
        .controller('UsuarioController', UsuarioController);

    /** @ngInject */
    function UsuarioController(usuarioService,usuarioId, $mdDialog)
    {
        var vm              = this;
        vm.salvar           = salvar
        vm.mudarStatus      = mudarStatus
        vm.tipo             = 'password'
        vm.status           = 'icon-lock-unlocked-outline'
        vm.mudarSenha       = mudarSenha

        function salvar() {
            console.log(vm.nome, vm.administrador, vm.desativado)
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

        function mudarSenha(ev) {
            $mdDialog.show({
                controller: UsuarioController,
                templateUrl: 'app/main/usuario/formulario/editar-senha.view.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                resolve : {
                    usuarioId : function($stateParams){
                        return $stateParams.id;
                    }    
                },
                fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
              })
              .then(function(answer) {
                console.log('teste')
              }, function() {
                console.log('teste 2')
              });
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
            console.log(usuarioId)
            /*if(usuarioId) {
                return usuarioService.getById(usuarioId).then(function(dados) {
                    vm.data = records
                })
            }*/
        }
        init()
        
    }
})();


