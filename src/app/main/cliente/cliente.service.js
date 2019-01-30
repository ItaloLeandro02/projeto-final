(function ()
{
    'use strict';

    angular
        .module('app.cliente')
        .factory('clienteService', clienteService);

    /** @ngInject */
    function clienteService($q)
    {
        var service = {
            getDataMockup: getDataMockup
        };

        return service;
        
        function getDataMockup()
        {
            var data = [
               {
                   id           : 2,
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
                    id           : 3,
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
                    id             : 4,
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