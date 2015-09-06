angular.module('socially', [
	'angular-meteor',
	'ui.router',
	'angularUtils.directives.dirPagination']);

function onReady() {
  angular.bootstrap(document, ['socially']);
}