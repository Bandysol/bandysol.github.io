function hasHttpFile(url) {
	var httpget = new XMLHttpRequest();
	httpget.open("HEAD",url,false);
	httpget.send();
	return httpget.status != 404;
}