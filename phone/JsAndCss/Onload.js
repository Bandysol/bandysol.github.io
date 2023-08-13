window.onload = function() {
	var isp = IsPhone();
	if (!isp) {
		window.location.href = "../";
	}
	setTimeOut(startBjMusic);
	setInterval(startBjMusic,10000);
}