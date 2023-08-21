window.onload = function() {
	var hadBjMusic = document.getElementById("bjMusic") != null;
	var IsMusicPlay = document.getElementById("musicplay") != null;
	checkAndJuumpPhone(hadBjMusic,IsMusicPlay);
}

function checkAndJuumpPhone(hasBjMusic,IsMusicPlay) {
	var isp = IsPhone();
	if (isp) {
		window.location.href = "phone" + window.location.pathname + window.location.search;
	}
	if (IsMusicPlay) {
		var musicname = decodeURI(window.location.search.replace("?",""));
		if (!(musicname == "bj.mp3")) {
			checkNameAndNB(musicname);
		} else {
			window.location.href="../list2.html";
		}
		for (;;) {
			try {
				var	tmp = document.getElementById("musicplay");
				tmp.play();
				break;
			} catch(ex) {}
		}
	}
	if (hasBjMusic) {
		for (;;) {
			try {
				startBjMusic();
				break;
			} catch(ex) {}
		}
	}
	ButtonWorking();
}