(function ()
{
    'use strict';

    angular
        .module('app.login')
        .factory('loginService', loginService);

    /** @ngInject */
    function loginService(api)
    {
        let loginFactory = {};

        loginFactory.auth = function(email,senha){
        var ds = new api.auth();
        ds.email = email;
        ds.password = senha;
        return ds.$save()
    }

    return loginFactory;
       
    }

})();