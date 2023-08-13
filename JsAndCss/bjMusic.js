window.onload = function() {
	setInterval("startBjMusic()",100);
}

function startBjMusic() {
	var music = document.getElementById('bjMusic');
	if (music.paused) {
		music.paused = false;
		music.volume = 0.1;
		music.play();
	}
}
