(function ()
{
    'use strict';

    angular
        .module('app.usuario')
        .factory('usuarioService', usuarioService);

    /** @ngInject */
    function usuarioService($q)
    {
        var service = {
            getDataMockup: getDataMockup
        };

        return service;
        
        function getDataMockup()
        {
            var data = [
               {
                   nome         : 'Adsoft Gestão Empresarial Ltda',
                   cnpj         : '01.255.366/0001-58',
                   cpf          : '',
                   numeroSerie  : '200100001',
                   status       : 'ativo',
                   contrato     : 'A',
                   dataHoraAcesso: new Date(),
                   androidGourmet : true,
                   androidPedidos : false 
                },
                {
                    nome         : 'Adsoft Gestão Empresarial Ltda',
                    cnpj         : '01.255.366/0001-58',
                    cpf          : '',
                    numeroSerie  : '200100001',
                    status       : 'ativo',
                    contrato     : 'A',
                    dataHoraAcesso: new Date(),
                    androidGourmet : true,
                    androidPedidos : false 
                 },
                 {
                    nome         : 'Adsoft Gestão Empresarial Ltda',
                    cnpj         : '01.255.366/0001-58',
                    cpf          : '',
                    numeroSerie  : '200100001',
                    status       : 'ativo',
                    contrato     : 'A',
                    dataHoraAcesso: new Date(),
                    androidGourmet : true,
                    androidPedidos : false 
                 },
                 {
                    nome         : 'Adsoft Gestão Empresarial Ltda',
                    cnpj         : '01.255.366/0001-58',
                    cpf          : '',
                    numeroSerie  : '200100001',
                    status       : 'ativo',
                    contrato     : 'A',
                    dataHoraAcesso: new Date(),
                    androidGourmet : true,
                    androidPedidos : false 
                 },
                 {
                    nome         : 'Adsoft Gestão Empresarial Ltda',
                    cnpj         : '01.255.366/0001-58',
                    cpf          : '',
                    numeroSerie  : '200100001',
                    status       : 'ativo',
                    contrato     : 'A',
                    dataHoraAcesso: new Date(),
                    androidGourmet : true,
                    androidPedidos : false 
                 },
                 {
                    nome         : 'Adsoft Gestão Empresarial Ltda',
                    cnpj         : '01.255.366/0001-58',
                    cpf          : '',
                    numeroSerie  : '200100001',
                    status       : 'ativo',
                    contrato     : 'A',
                    dataHoraAcesso: new Date(),
                    androidGourmet : true,
                    androidPedidos : false 
                 },
                 {
                    nome         : 'Adsoft Gestão Empresarial Ltda',
                    cnpj         : '01.255.366/0001-58',
                    cpf          : '',
                    numeroSerie  : '200100001',
                    status       : 'ativo',
                    contrato     : 'A',
                    dataHoraAcesso: new Date(),
                    androidGourmet : true,
                    androidPedidos : false 
                 },
                 {
                    nome         : 'Adsoft Gestão Empresarial Ltda',
                    cnpj         : '01.255.366/0001-58',
                    cpf          : '',
                    numeroSerie  : '200100001',
                    status       : 'ativo',
                    contrato     : 'A',
                    dataHoraAcesso: new Date(),
                    androidGourmet : true,
                    androidPedidos : false 
                 },
                 {
                    nome         : 'Adsoft Gestão Empresarial Ltda',
                    cnpj         : '01.255.366/0001-58',
                    cpf          : '',
                    numeroSerie  : '200100001',
                    status       : 'ativo',
                    contrato     : 'A',
                    dataHoraAcesso: new Date(),
                    androidGourmet : true,
                    androidPedidos : false 
                 }, 
            ]

            // Return the promise
            return Promise.resolve(data);
        }
        
    }

})();