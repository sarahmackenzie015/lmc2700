var canvas = document.getElementById('canvas');
var context= canvas.getContext('2d');

//the clear button to clear canvas
var clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function(){
	clearCanvas(canvas);
})


var radius = 5; 
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function(){
	var image = context.getImageData(0,0, canvas.width, canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.putImageData(image, 0,0);
}

function clearCanvas(c){
	canvas.width = canvas.width;
	context.lineWidth = radius*2;
}

context.lineWidth = radius*2;

var putPoint = function(e){
	if (dragging){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);

	}
}
var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	context.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousemove', putPoint);
