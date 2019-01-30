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
                  senha               : '1234',
                  administrador       : 'true',
                  desativado          : 'false',
                
               },
               {
                  id                  : 1,
                  email               : 'ricardoliveira@hotmail.com',
                  nome                : 'Ricardo Oliveira',
                  senha               : '5678',
                  administrador       : 'true',
                  desativado          : 'false',
                
               },
               {
                  id                  : 1,
                  email               : 'italoleandro@hotmail.com',
                  nome                : 'Italo Leandro',
                  senha               : '13579',
                  administrador       : 'true',
                  desativado          : 'false',
                
               },
               {
                  id                  : 1,
                  email               : 'testemail@hotmail.com',
                  nome                : 'Teste Nome',
                  senha               : '24680',
                  administrador       : 'false',
                  desativado          : 'false',
               
               },
            ]

            // Return the promise
            return Promise.resolve(data);
        }
        
    }

})();