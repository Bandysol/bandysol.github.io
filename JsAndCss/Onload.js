window.onload = function() {
	var isp = IsPhone();
	if (isp) {
		window.location.href="phone/"+window.location.pathname;
	}
	setTimeOut(startBjMusic);
	setInterval(startBjMusic,10000);
}