angular
	.module('app', []);

angular
	.module('app')
	.controller('NavController', NavController);

function NavController() {
	var vm = this;

	vm.state = '';
}