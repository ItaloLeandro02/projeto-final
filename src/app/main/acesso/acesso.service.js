(function ()
{
    'use strict';

    angular
        .module('app.acesso')
        .factory('acessoService', acessoService);

    /** @ngInject */
    function acessoService($q)
    {
        var service = {
            getDataMockup: getDataMockup
        };

        return service;
        
        function getDataMockup()
        {
            var data = [
               {
                   razao_social             : 'Mercado Dois Irmãos LTDA',
                   nome_fantasia            : 'Mercadinho Dois Irmãos',
                   cnpj                     : '99.999.999/9999-99',
                   numero_serie             : '200 100 300 91',
                   versao_siaf              : '3.0.1',
                   ip                       : '192.168.0.1',
                   data_hora_acesso         : new Date(),
                   versao_ws                : 'Windows 7',
                   status_acesso            : 'Liberado',
                   tipo_contrato            : 'Aluguel',
                   tipo_versao              : '????',
                },
                {
                    razao_social             : 'Kampys Distribuidora de Bebidas ME',
                    nome_fantasia            : 'Kampys Bar',
                    cnpj                     : '00.111.222/0001-23',
                    numero_serie             : '200 122 313 61',
                    versao_siaf              : '2.8.1',
                    ip                       : '10.0.0.1',
                    data_hora_acesso         : new Date(),
                    versao_ws                : 'Windows 7',
                    status_acesso            : 'Liberado',
                    tipo_contrato            : 'Aluguel',
                    tipo_versao              : '????',
                 },
                 {
                    razao_social             : 'Julio César LTDA',
                    nome_fantasia            : 'Agua na Boca',
                    cnpj                     : '32.123.456/0001-01',
                    numero_serie             : '800 678 213 33',
                    versao_siaf              : '3.0.1',
                    ip                       : '192.168.0.1',
                    data_hora_acesso         : new Date(),
                    versao_ws                : 'Windows 7',
                    status_acesso            : 'Liberado',
                    tipo_contrato            : 'Aluguel',
                    tipo_versao              : '????',
                 },
                 {
                    razao_social             : 'JBS Servicos Derivados LTDA',
                    nome_fantasia            : 'SuperMercado Cinco Estrelas',
                    cnpj                     : '88.654.999/0002-78',
                    numero_serie             : '098 765 432 22',
                    versao_siaf              : '1.5.3',
                    ip                       : '10.0.21.1',
                    data_hora_acesso         : new Date(),
                    versao_ws                : 'Windows 7',
                    status_acesso            : 'Liberado',
                    tipo_contrato            : 'Aluguel',
                    tipo_versao              : '????',
                 },
            ]

            // Return the promise
            return Promise.resolve(data);
        }
        
    }

})();