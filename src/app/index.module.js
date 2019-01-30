(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [           
            
            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick Panel
            'app.quick-panel',

            'app.login',
            
            // Sample
            'app.sample',
            /// Nossos modulos da aplicacao precisam ser importados
            'app.cliente',

            //Módulo usuário
            'app.usuario',

            //Módulo log
            'app.log',

            //Módulo acesso
            'app.acesso',


        ]);
})();