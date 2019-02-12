(function ()
{
    'use strict';

    angular
        .module('app.usuario', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.usuario', {
                url    : '/usuario',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/usuario/lista/lista.view.html',
                        controller : 'ListaUsuarioController as vm'
                    }
                }
            })
            .state('app.viewUsuario', {
                url    : '/usuario/view/:id',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/usuario/formulario/usuario.view.html',
                        controller : 'UsuarioController as vm'
                    }
                },
                resolve : {
                    usuarioId : function($stateParams){
                        
                        //var auth = new api.autorizacao();
                        //auth.rotina = '04USU';
                        //auth.$get(function() {
                            return $stateParams.id;
                        //})
                    }    
                }
            })
            .state('app.novoUsuario', {
                url    : '/usuario/novo',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/usuario/formulario/novo.view.html',
                        controller : 'UsuarioController as vm'
                    }
                },
                /*resolve : {
                    usuarioId : function($stateParams,api){                        
                        var auth = new api.autorizacao();
                        auth.rotina = '01USU';
                        auth.$get(function(){
                            return $stateParams.id;
                        })                        
                    }    
                }/**/
                onEnter : function(api){
                    var auth = new api.autorizacao();
                        auth.rotina = '01USU';
                        auth.$get(function(){
                            return $stateParams.id;
                        })      
                }
            })
            .state('app.editarInformacoes', {
                url    : '/editar-informacoes',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/usuario/formulario/editar-informacoes.view.html',
                        controller : 'UsuarioController as vm'
                    }
                }
            })
            .state('app.editarUsuario', {
                url    : '/usuario/editar/:id',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/usuario/formulario/editar.view.html',
                        controller : 'UsuarioController as vm'
                    }
                },
                resolve : {
                    usuarioId : function($stateParams,api){
                        
                        var auth = new api.autorizacao();
                        auth.rotina = '02USU';
                        var usuarioId = $stateParams.id;
                        return auth.$get(function() {
                            return usuarioId;
                        })
                    }    
                }
            })
            .state('app.mudarSenha', {
                url    : '/mudar-senha',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/usuario/formulario/editar-senha.view.html',
                        controller : 'UsuarioController as vm'
                    }
                },
                resolve : {
                    usuarioId : function($stateParams){
                        
                        //var auth = new api.autorizacao();
                        //auth.rotina = '02USU';
                        //auth.$get(function() {
                            return $stateParams.id;
                        //})
                    }    
                }
            });
    

        msNavigationServiceProvider.saveItem('acesso.usuario', {
            title    : 'Usuários',
            icon     : 'icon-account',
            state    : 'app.usuario',
            /*stateParams: {
                'param1': 'page'
             },*/            
            weight   : 1
        })
    }
})();