var fart = function() {
	// Create a Paper.js Path to draw a line into it:
	var path = new Path();
	// Give the stroke a color
	path.strokeColor = 'black';
	var start = new Point(100, 100);
	// Move to start and draw a line from there
	path.moveTo(start);

	var point = new Point({
		length: 100,
		angle: 0
	});
	// Note the plus operator on Point objects.
	// PaperScript does that for us, and much more!

	path.lineBy(point);
	path.lineBy(point.rotate(60));
	path.lineBy(point.rotate(120));
	path.lineBy(point.rotate(180));
	path.lineBy(point.rotate(240));
	path.lineBy(point.rotate(300));
};

fart();

