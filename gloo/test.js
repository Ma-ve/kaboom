let t = 0;

gloo({
	title: "kaboom",
	width: 640,
	height: 480,
	init(g) {
	},
	frame(g) {
		const gl = g.gl;
		t += 0.1;
		gl.clearColor(0, (Math.cos(t) + 1) / 2, (Math.sin(t) + 1) / 2, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		console.log(g.mouseX(), g.mouseY());
		if (g.keyPressed("esc")) {
			g.quit();
		}
	},
});