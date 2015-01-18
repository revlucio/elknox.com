angular
	.module('app', []);

angular
	.module('app')
	.controller('NavController', NavController);

function NavController() {
	var vm = this;

	vm.state = 'home';

	vm.showPopup = false;
	vm.imgSrc = 'fish';
	vm.title = 'crazy monsters - 2014'

	//vm.select = select;

	function select(src) {
		vm.showPopup = true;
		vm.imgSrc = src;
	}
}