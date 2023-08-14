window.onload = function() {
	var isp = IsPhone();
	if (isp) {
		window.location.href="phone"+window.location.pathname;
	}
	setTimeOut(startBjMusic);
	setInterval(startBjMusic,10000);
	CheckNextAndBack(window.location.pathname.replace("/blog/",""));
}

function CheckNextAndBack(name) {
	var index = null;
	for (var i = 0;i < Lists.length;++i) {
		if (Lists[i] == name) {
			index = i;
		}
	}
	if (index == null) {
		throw new Exception("URL出错");
	}
	if (index > 0) {
		back.innerHTML = "上一篇";
		back.href = "./" + Lists[index-1];
	}
	if (index < (Lists.length - 1)) {
		next.innerHTML = "下一篇";
		next.href = "./" + Lists[index+1];
	}
}