(function () {
	window.onload = function () {
		window.setTimeout(fadeout, 0);
	};
  function fadeout() {
		document.querySelector(".page-loader").style.opacity = "500";
		document.querySelector(".page-loader").style.display = "none";
	}


})();
