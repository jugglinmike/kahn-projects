void setup() {
	size(400, 400);
	background(53, 29, 97);
}

void draw() {
	var fisH = function(blU){
		var centerX = mouseX;
		var centerY = mouseY;
		var bodyLength = mouseX - 10;
		var bodyHeight = bodyLength/3;
		var bodyColor = color(100, 100, blU);
		noStroke();
		fill(bodyColor);
		// body
		ellipse(centerX, centerY, bodyLength, bodyHeight);
		// tail
		var tailWidth = bodyLength/4;
		var tailHeight = bodyHeight/2;
		triangle(centerX-bodyLength/2, centerY,
				 centerX-bodyLength/2-tailWidth, centerY-tailHeight,
				 centerX-bodyLength/2-tailWidth, centerY+tailHeight);
		// eye
		fill(33, 33, 33);
		ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
	};

	var X = 100;

	mouseClicked = function() {
		fisH(X);
		var X = X+10;
	};
}