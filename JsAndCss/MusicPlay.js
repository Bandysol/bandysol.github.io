window.onload = function() {
	var isp = IsPhone();
	if (isp) {
		window.location.href="phone"+window.location.pathname+window.location.search;
	} else {
		var musicname = window.location.search.substring(1);
		if (!(musicname == "bj.mp3")) {
			musicplay.src = "./"+musicname;
			musicplay.load();
			var namedou = document.getElementById("name");
			namedou.innerHTML = decodeURI(musicname).replace(".mp3","");
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

function scanPlayDo() {
	if (musiclongstr == "") {
		musiclongstr = Math.trunc(musicplay.duration / 60) + ":" + Math.trunc(musicplay.duration % 60);
		var nowlongstr = Math.trunc(musicplay.currentTime / 60) + ":" + Math.trunc(musicplay.currentTime % 60);
	}
}

var moreopen = false;