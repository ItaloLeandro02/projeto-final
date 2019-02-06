(function ()
{
    'use strict';

    angular
        .module('app.usuario')
        .factory('usuarioService', usuarioService);

    /** @ngInject */
    function usuarioService($q)
    {
        var service = {
            getDataMockup: getDataMockup
        };

        return service;
        
        function getDataMockup()
        {
            var data = [
                {
                  id                                : 1,
                  email                             : 'daniloduarte@hotmail.com',
                  nome                              : 'Danilo Duarte',
                  administrador                     : 'true',
                  desativado                        : 'false',
                  permissoesSelecionadasClientes    : ['Incluir'],
                  permissoesSelecionadasUsuarios    : ['Incluir']
               
               },
            ]

            // Return the promise
            return Promise.resolve(data);
        }
        
    }

})();