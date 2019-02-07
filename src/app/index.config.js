(function ()
{
    'use strict';

    angular
        .module('fuse')
        .config(config);

    /** @ngInject */
    function config($translateProvider,$httpProvider)
    {
        // Put your common app configurations here

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
                  config.headers.Authorization = $localStorage.usuarioLogado;
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