(function ()
{
    'use strict';

    angular
        .module('app.log', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.log', {
                url    : '/log',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/log/lista/lista.view.html',
                        controller : 'ListaLogController as vm'
                    }
                }
            });
    

        msNavigationServiceProvider.saveItem('acesso.log', {
            title    : 'Log',
            icon     : 'icon-account',
            state    : 'app.log',
            /*stateParams: {
                'param1': 'page'
             },*/            
            weight   : 1
        });
    }
})();