window.onload = function() {
	var isp = IsPhone();
	if (!isp) {
		window.location.href= window.location.pathname.substring(5);
	}
	setTimeOut(startBjMusic);
	setInterval(startBjMusic,10000);
}