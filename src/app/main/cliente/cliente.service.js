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
         return ds.$get()
      
      }
    
      return clienteFactory

   }

})();