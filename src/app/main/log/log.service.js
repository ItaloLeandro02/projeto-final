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
                   acao                : 'login',
                   data_hora           : new Date(),
                },
                {
                    nome                : 'Danilo Duarte',
                    acao                : 'criou novo usuario',
                    data_hora           : new Date(),   
                 },
                {
                  nome                : 'Italo Leandro',
                  acao                : 'login',
                  data_hora           : new Date(),
                 
                  
                },
                {
                    nome                : 'Italo Leandro',
                    acao                : 'criou novo usuario',
                    data_hora           : new Date(),
                   
                    
                  },
                {
                  nome                : 'Ricardo Oliveira',
                  acao                : 'login',
                  data_hora           : new Date(),
                 
                
                },
                {
                    nome                : 'Ricardo Oliveira',
                    acao                : 'criou novo usuario',
                    data_hora           : new Date(),
                   
                  
                },
            ]

            // Return the promise
            return Promise.resolve(data);
        }
        
    }

})();