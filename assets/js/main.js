(function () {
	window.onload = function () {
		window.setTimeout(fadeout, 0);
	};
  function fadeout() {
		document.querySelector(".page-loader").style.opacity = "0";
		document.querySelector(".page-loader").style.display = "none";
	}
	window.onscroll = function () {

		var backToTo = document.querySelector(".scroll-top");
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			backToTo.style.display = "flex";
		} else {
			backToTo.style.display = "none";
		}
	};


})();
