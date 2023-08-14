window.onload = function() {
	var isp = IsPhone();
	if (isp) {
		window.location.href="phone"+window.location.pathname;
	}
	setTimeout(startBjMusic);
	setInterval(startBjMusic,10000);
	CheckNextAndBack(window.location.pathname.replace("/blog/",""));
}

var NextJump = "";
var BackJump = "";

next.onclick = function() {
	location.href = NextJump;
}

back.onclick = function() {
	location.href = BackJump;
}

function CheckNextAndBack(name) {
	var index = null;
	for (var i = 0;i < Lists.length;++i) {
		if (Lists[i] == name) {
			index = i;
		}
	}
	if (index == null) {
		return;
	}
	if (index > 0) {
		BackJump = "./" + Lists[index-1];
	} else {
		back.disabled = true;
	}
	if (index < (Lists.length - 1)) {
		NextJump = "./" + Lists[index+1];
	} else {
		next.disabled = true;
	}
}