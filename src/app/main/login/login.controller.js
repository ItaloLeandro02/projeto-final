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
                toastr.success('Seja Bem Vindo!','OLÁ :)',{progressBar: true, timeOut: 3000})
            }

            let erro = function(resposta){
               toastr.warning('Usuario ou senha incorretos','Ops, algo deu errado :(',{progressBar:true, timeOut:   3000})
            }
            
            loginService.auth(vm.form.email,vm.form.password).then(sucesso,erro)
            
        }
    }
})();