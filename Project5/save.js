
var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);


function saveImage(){
	
	//save canvas image
	var data = canvas.toDataURL();

	//make a new canvas object
	var drawing = document.createElement('canvas');
		drawing.width = window.innerWidth;
   		drawing.height = window.innerHeight;
   	var context= canvas.getContext('2d');

   	//set data to old data
   	drawing.src = data;
	drawing.onload = function() {
   		context.drawImage(drawing,0,0);
	};

	//add to array
	images[images.length] = drawing;

	//for testing
	window.open(data, '_blank', 'location=0', 'menubar=0');

	//clear the data to start over
	clearCanvas(canvas);
}

var images = [];