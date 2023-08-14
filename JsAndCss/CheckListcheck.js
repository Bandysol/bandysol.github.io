function CheckIDCheck() {
	const headstr = "button-select-";
	var end = null;
	var pathname = window.location.pathname;
	if (pathname == "/" || pathname == "/index.html") {
		end = headstr + "1";
	} else if (pathname == "/about.html") {
		end = headstr + "5";
	} else {
		end = headstr + (parseInt(pathname.replace("/list","").replace(".html","")) + 1);
	}
	var headle = document.getElementById(end);
	headle.disabled = true;
}