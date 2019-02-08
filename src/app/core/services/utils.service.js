(function ()
{
    'use strict';

    angular
        .module('app.core')
        .factory('siafUtils', siafUtils);

    /** @ngInject */
    function siafUtils()
    {        
        var rotinas = [
            {nome : 'Incluir', valor: '01USU'},
            {nome : 'Editar', valor: '02USU'},
            {nome : 'Excluir', valor: '03USU'},
            {nome : 'Visualizar', valor: '04USU'},
            {nome : 'Incluir', valor: '01CLI'},
            {nome : 'Editar', valor: '02CLI'},
            {nome : 'Excluir', valor: '03CLI'},
            {nome : 'Visualizar', valor: '04CLI'},
            {nome : 'Visualizar', valor: '01ACE'},
            {nome : 'Visualizar', valor: '01LOG'}           
        ]

        var service = {
            getRotinas          : getRotinas,
            getRotinaPorNome    : getRotinaPorNome,
            getRotinaPorValor   : getRotinaPorValor
        };

        return service;

        //////////

        /**
         * Retorna todasas rotinas da aplicação
         */
        function getRotinas()
        {
            return rotinas;
        }

        function getRotinaPorNome(nomeRotina)
        {
            return rotinas.find(function(rotina){ return rotina.nome == nomeRotina });
        }

        function getRotinaPorValor(valorRotina)
        {
            return rotinas.find(function(rotina){ return rotina.valor == valorRotina });
        }
       
    }
}());