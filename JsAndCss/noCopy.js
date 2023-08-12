var threshold = 160;
var check = setInterval(function() {
   	if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
       	window.location.reload();
   	}
}, 1000);

window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
   	if (event.keyCode == 123) {
   		event.preventDefault();
   		window.event.returnValue = false;
   	}
}