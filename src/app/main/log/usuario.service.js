(function ()
{
    'use strict';

    angular
        .module('app.log')
        .factory('logService', logService);

    /** @ngInject */
    function logService($q)
    {
        var service = {
            getDataMockup: getDataMockup
        };

        return service;
        
        function getDataMockup()
        {
            var data = [
               {
                   nome                : 'Danilo Duarte',
                   data_hora           : new Date(),
                   acao                : 'login',
                   
                   
                },
                {
                    nome                : 'Danilo Duarte',
                    data_hora           : new Date(),
                    acao                : 'criou novo usuario',
                 },
                {
                  nome                : 'Italo Leandro',
                  data_hora           : new Date(),
                  acao                : 'login',
                  
                },
                {
                    nome                : 'Italo Leandro',
                    data_hora           : new Date(),
                    acao                : 'criou novo usuario',
                    
                  },
                {
                  nome                : 'Ricardo Oliveira',
                  data_hora           : new Date(),
                  acao                : 'login',
                
                },
                {
                    nome                : 'Ricardo Oliveira',
                    data_hora           : new Date(),
                    acao                : 'criou novo usuario',
                  
                },
            ]

            // Return the promise
            return Promise.resolve(data);
        }
        
    }

})();