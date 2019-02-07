(function ()
{
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($localStorage,$state,loginService)
    {
        var vm = this;
        
        function init(){
            $localStorage.usuarioLogado = ''
        }
        init();

        vm.login = login;

        function login(){
            
            let sucesso = function(resposta){
                $localStorage.usuarioLogado = resposta.data
                $state.go('app.cliente')
            }

            let erro = function(resposta){
                window.alert('Usuario ou senha incorretos')
            }
            
            loginService.auth(vm.form.email,vm.form.password).then(sucesso,erro)
            
        }
    }
})();