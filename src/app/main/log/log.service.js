(function ()
{
    'use strict';

    angular
        .module('app.log')
        .factory('logService', logService);

    /** @ngInject */
    function logService (api) {
        let logFactory = {};

        logFactory.getAll = function () {
            let ds = new api.log();
            return ds.$get();
        }

        return logFactory;
    }

})();