(function ()
{
    'use strict';

    angular
        .module('app.log')
        .factory('logService', logService);

    /** @ngInject */
    function logService (api) {
        let logFactory = {};

        logFactory.getAll = function (dataIni,dataFim) {
            dataIni = dataIni.toLocaleDateString().split('/').reverse().join('-');
            dataFim = dataFim.toLocaleDateString().split('/').reverse().join('-');;
            let ds = new api.log();
            return ds.$get({dataIni: dataIni, dataFim:dataFim});
        }

        return logFactory;
    }

})();