(function ()
{
    'use strict';

    angular
        .module('app.acesso', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.acesso', {
                url    : '/acesso',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/acesso/lista/lista.view.html',
                        controller : 'ListaAcessoController as vm'
                    }
                }
            })
            .state('app.acessoView', {
                url    : '/acesso/view/:id',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/acesso/lista/acesso.view.html',
                        controller : 'ListaAcessoController as vm'
                    }
                },
                resolve : {
                    acessoId : function($stateParams){
                        console.log('Modulo: ' + $stateParams.id)
                        return $stateParams.id;
                    }    
                }
                
            });
    

        msNavigationServiceProvider.saveItem('acesso.acesso', {
            title    : 'Controle de Acesso',
            icon     : 'icon-account',
            state    : 'app.acesso',
            /*stateParams: {
                'param1': 'page'
             },*/            
            weight   : 1
        });
    }
})();