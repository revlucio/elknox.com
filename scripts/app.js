angular
	.module('app', ['ngAnimate']);

angular
	.module('app')
	.controller('NavController', NavController);

function NavController($timeout) {
	var vm = this;

	vm.state = 'home';

	vm.showPopup = false;
	vm.imgSrc = 'fish';
	vm.title = 'crazy monsters - 2014'

	vm.isIntroDone = false;

	$timeout(endIntro, 2000);

	function endIntro() {
		vm.isIntroDone = true;
	}


	//vm.select = select;

	function select(src) {
		vm.showPopup = true;
		vm.imgSrc = src;
	}
}