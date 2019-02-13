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
            if (!dataIni) dataIni = new Date();
            if (!dataFim) dataFim = new Date();
            
            dataIni = dataIni.toLocaleDateString().split('/').reverse().join('-');
            dataFim = dataFim.toLocaleDateString().split('/').reverse().join('-');;
            let ds = new api.log();
            return ds.$get({dataIni: dataIni, dataFim:dataFim});
        }

        logFactory.getUsuarios = function(){
            let ds = new api.usuario();
            return ds.$get();
        }

        return logFactory;
    }

})();