(function ()
{
    'use strict';

    angular
        .module('fuse')
        .config(config);

    /** @ngInject */
    function config($translateProvider,$httpProvider,$mdDateLocaleProvider)
    {
        // Put your common app configurations here
        $mdDateLocaleProvider.formatDate = function(date) {
          return date ? moment(date).format('DD/MM/YYYY') : null;
        };

        // angular-translate configuration
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/i18n/{lang}.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitize');

        $httpProvider.interceptors.push(function($q, $injector, $localStorage) {
            return {
              'request': function (config) {
                config.headers = config.headers || {};
                if ($localStorage.usuarioLogado) {
                  config.headers.Authorization = 'Bearer ' + $localStorage.usuarioLogado.token;
                }
    
                return config;
              },
              'responseError': function(response) {
                switch (response.status) {
                  case 401:
                    var stateService = $injector.get('$state');
                    stateService.go('app.login');
                    toastr.error("Faça login novamente.","Token Expirado!",{progressBar:true,timeOut:3000})
                    break;
                    
                  case 403:
                    var stateService = $injector.get('$state');
                    stateService.go('app.sample');
                    toastr.error(response.data.message,"Acesso não autorizado",{progressBar:true,timeOut:3000})
                    break;  
    
                  default :
                    return $q.reject(response);
                }
              }
            };
          })
    }


})();