function startBjMusic() {
	var music = document.getElementById('bjMusic');
	if (music.paused) {
		music.volume = 0.1;
		music.play();
	}
}
