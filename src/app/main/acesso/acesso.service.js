(function ()
{
    'use strict';

    angular
        .module('app.acesso')
        .factory('acessoService', acessoService);

    /** @ngInject */
    function acessoService (api) {
       let acessoFactory = {};

       acessoFactory.getAll = function() {
           let ds = new api.acesso();
           return ds.$get();
       }

       return acessoFactory;
        
    }

})();