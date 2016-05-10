require( './vendor' ).default();

const ngModule = angular.module('app', [
    'ngMaterial',
    'ui.router',
    'ngCookies',
    'LocalStorageModule',
    'pascalprecht.translate',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngSanitize',
    'ttmd.table'
]);

require('./config/index.js').default(ngModule);
require('./submodules').default(ngModule);

if(MODE.ON_MDTABLE_TEST){
    require( 'angular-mocks/angular-mocks' );
    require( './test/config.mock' ).default( ngModule );
}

angular.element(document).ready(function () {
    angular.bootstrap(document, [ngModule.name], {});
});
