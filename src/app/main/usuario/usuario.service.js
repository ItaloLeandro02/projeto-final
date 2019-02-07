(function ()
{
    'use strict';

    angular
        .module('app.usuario')
        .factory('usuarioService', usuarioService);

    /** @ngInject */
    function usuarioService (api) {
        
        let usuarioFactory = {};    

        usuarioFactory.getAll = function () {
            let ds = new api.usuario();
            return ds.$get();
        }

        return usuarioFactory;
    }

})();