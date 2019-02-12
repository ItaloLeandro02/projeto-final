(function ()
{
    'use strict';

    angular
        .module('app.sample', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.sample', {
                url    : '/sample',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/sample/sample.html',
                        controller : 'SampleController as vm'
                    }
                },
                resolve: {
                    SampleData: function (msApi)
                    {
                        return msApi.resolve('sample@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/sample');

        // Api
        msApiProvider.register('sample', ['app/data/sample/sample.json']);

        //Navigation
        msNavigationServiceProvider.saveItem('Cliente.incluir', {
            title : 'E-Commerce',
            icon  : 'icon-cart',
            weight: 3
        });
        msNavigationServiceProvider.saveItem('Cliente.editar', {
            title : 'E-Commerce',
            icon  : 'icon-key',
            weight: 3
        });
        msNavigationServiceProvider.saveItem('Cliente.excluir', {
            title : 'E-Commerce',
            icon  : 'icon-cart',
            weight: 3
        });
        msNavigationServiceProvider.saveItem('Cliente.listar', {
            title : 'Listar',
            icon  : 'icon-key',
            weight: 3,
            state: 'app.cliente'
        });
    }
})();