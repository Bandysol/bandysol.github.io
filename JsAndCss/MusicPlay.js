loop.onclick = function() {
	if (musicplay.loop) {
		musicplay.loop = false;
		loop.innerHTML = "<div class=\"gua0\"> 开启循环播放 </div>";
	} else {
		musicplay.loop = true;
		loop.innerHTML = "<div class=\"gua0\"> 关闭循环播放 </div>";
	}
}

/*more.onclick = function() {
	var moredou = document.getElementById("morediv");
	if (!moreopen) {
		more.innerHTML = "<div class=\"gua0\"> 收起 </div>";
		//download.innerHTML = "<div class=\"gua0\"> 下载 </div>";
		download.href = musicplay.src;
		moreopen = true;
	} else {
		more.innerHTML = "<div class=\"gua0\"> 更多 </div>";
		//download.innerHTML = "";
		moreopen = false;
	}
}*/

var moreopen = false;

function checkNameAndNB(url) {
	var index = null;
	for (var i = 0;i < Lists.length;++i) {
		if (Lists[i] == url) {
			index = i;
		}
	}
	if (index == null) {
		return false;
	}
	var namedou = document.getElementById("name");
	namedou.innerHTML = Names[index];
	if (index > 0) {
		BackButtonLink = "./play.html?" + Lists[index-1];
	} else {
		var back = document.getElementById("back");
		back.disabled = true;
	}
	if (index < (Lists.length - 1)) {
		NextButtonLink = "./play.html?" + Lists[index+1];
	} else {
		var next = document.getElementById("next");
		next.disabled = true;
	}
	musicplay.src = FirstString + Lists[index];
	musicplay.load();
	//var playthis = document.getElementById("musicplay");
//	playthis.play();
}

var BackButtonLink = "";
var NextButtonLink = "";

next.onclick = function() {
	location.href = NextButtonLink;
}

back.onclick = function() {
	location.href = BackButtonLink;
}