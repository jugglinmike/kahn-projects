void setup() {
	size(400, 400);
}

void draw() {
	background(157, 194, 227);
	fill(115, 255, 0);

	triangle(1,1,100,1,1,100);//1
	triangle(100,1,200,1,100,100);//2
	triangle(200,1,300,1,200,100);//3
	triangle(300,1,400,1,300,100);//4

	triangle(1,100,100,100,1,200);//1
	triangle(100,100,200,100,100,200);//2
	triangle(200,100,300,100,200,200);//3
	triangle(300,100,400,100,300,200);//4

	triangle(1,200,100,200,1,300);//1
	triangle(100,200,200,200,100,300);//2
	triangle(200,200,300,200,200,300);//3
	triangle(300,200,400,200,300,300);//4

	triangle(1,300,100,300,1,400);//1
	triangle(100,300,200,300,100,400);//2
	triangle(200,300,300,300,200,400);//3
	triangle(300,300,400,300,300,400);//4
}