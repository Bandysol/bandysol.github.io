window.onload = function() {
	setTimeOut(startBjMusic);
	setInterval(startBjMusic,10000);
}

function startBjMusic() {
	var music = document.getElementById('bjMusic');
	if (music.paused) {
		music.paused = false;
		music.volume = 0.1;
		music.play();
	}
}
