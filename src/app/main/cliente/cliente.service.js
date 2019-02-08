(function ()
{
    'use strict';

    angular
        .module('app.cliente')
        .factory('clienteService', clienteService);

    /** @ngInject */
    function clienteService(api) {
         
      let clienteFactory = {};

         clienteFactory.getAll = function () {
         var ds = new api.cliente();
         
         return ds.$get();
         
         }

         clienteFactory.save = function(cliente) {

            let ds = new api.cliente();

            Object.keys(cliente).forEach(function(key){
               ds[key] = cliente[key]
            });

            return ds.$save()
         }
      
      return clienteFactory

   }

})();