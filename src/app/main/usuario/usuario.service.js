(function ()
{
    'use strict';

    angular
        .module('app.usuario')
        .factory('usuarioService', usuarioService);

    /** @ngInject */
    function usuarioService (api) {
        
        var usuarioFactory = {};    

        usuarioFactory.getAll = function () {
            var ds = new api.usuario();
            return ds.$get();
        }

        usuarioFactory.getById = function (usuarioId) {
            var ds = new api.usuario();
            ds.id  = usuarioId
            return ds.$get();
        }

        usuarioFactory.save = function (usuarioModel) {
            var ds = new api.usuario();

            Object.keys(usuarioModel).forEach(function(key) {
                ds[key] = usuarioModel[key];
            })

            if (ds.id) {return ds.$update()}
            return ds.$save();
        }

        usuarioFactory.mudarSenha = function(changePasswordModel) {
            var ds = new api.changePassword();
            
            Object.keys(changePasswordModel).forEach(function(key) {
                ds[key] = changePasswordModel[key];
            })
 
            return ds.$save();
        }

        usuarioFactory.delete = function (usuarioId) {
            var ds = new api.usuario();
            ds.id  = usuarioId
            return ds.$delete();
        }

        return usuarioFactory;
    }

})();