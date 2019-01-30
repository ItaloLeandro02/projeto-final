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
                  id                  : 1,
                  email               : 'daniloduarte@hotmail.com',
                  nome                : 'Danilo Duarte',
                  administrador       : 'true',
                  desativado          : 'false',
                
               },
               {
                  id                  : 1,
                  email               : 'ricardoliveira@hotmail.com',
                  nome                : 'Ricardo Oliveira',
                  administrador       : 'true',
                  desativado          : 'false',
                
               },
               {
                  id                  : 1,
                  email               : 'italoleandro@hotmail.com',
                  nome                : 'Italo Leandro',
                  administrador       : 'true',
                  desativado          : 'false',
                
               },
               {
                  id                  : 1,
                  email               : 'testemail@hotmail.com',
                  nome                : 'Teste Nome',
                  administrador       : 'false',
                  desativado          : 'false',
               
               },
            ]

            // Return the promise
            return Promise.resolve(data);
        }
        
    }

})();