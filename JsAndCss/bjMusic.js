function startBjMusic() {
	var music = document.getElementById('bjMusic');
	music.volume = 0.05;
	if (music.paused) {
		music.play();
	}
}
