require('./vendor').default();
const tableModule = angular.module('ttmd.table', []);
require('./lib').default(tableModule);

