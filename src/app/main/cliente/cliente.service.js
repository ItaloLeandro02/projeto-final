(function ()
{
    'use strict';

    angular
        .module('app.cliente')
        .factory('clienteService', clienteService);

    /** @ngInject */
    function clienteService(api) {
         
      let clienteFactory = {};

         clienteFactory.getAll = function (pagina, limit) {
            pagina ? pagina : pagina = 1;
            limit ? limit : limit = 10;
            
            var ds = new api.cliente();
         
            return ds.$get({page: pagina, limit: limit});
         }

         clienteFactory.getById = function (clienteId) {
            var ds = new api.cliente();
            ds.id  = clienteId;
         
            return ds.$get();
         }

         clienteFactory.save = function(cliente) {

            let ds = new api.cliente();

            Object.keys(cliente).forEach(function(key){
               ds[key] = cliente[key]
            });

            if (ds.id) return ds.$update();
            return ds.$save();
         }
      
      return clienteFactory

   }

})();