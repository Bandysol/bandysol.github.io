function IsPhone() {
	var useragent = navigator.userAgent;
	var rebool      = /mobile/i.test(useragent);
	return rebool;
}