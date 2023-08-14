window.onload = function() {
	var isp = IsPhone();
	if (isp) {
		window.location.href="phone"+window.location.pathname+window.location.search;
	} else {
		var musicname = decodeURI(window.location.search.substring(1));
		if (!(musicname == "bj.mp3")) {
			//musicplay.src = "./"+musicname;
			//musicplay.load();
			//var namedou = document.getElementById("name");
			//namedou.innerHTML = decodeURI(musicname).replace(".mp3","");
			checkNameAndNB(musicname);
		} else {
			window.location.href="../list2.html";
		}
	}
}

loop.onclick = function() {
	if (musicplay.loop) {
		musicplay.loop = false;
		loop.innerHTML = "<div class=\"gua0\"> 开启循环播放 </div>";
	} else {
		musicplay.loop = true;
		loop.innerHTML = "<div class=\"gua0\"> 关闭循环播放 </div>";
	}
}

more.onclick = function() {
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
}

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
		back.innerHTML = "上一首";
		back.href = "./play.html?" + Lists[index-1];
	}
	if (index < (Lists.length - 1)) {
		next.innerHTML = "下一首";
		next.href = "./play.html?" + Lists[index+1];
	}
	musicplay.src = FirstString + Lists[index];
	musicplay.load();
}