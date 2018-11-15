import {fabric} from 'fabric';

function run() {
    let canvas = new fabric.Canvas('myCanvas');
    let rect = new fabric.Rect({
	    left: 300,
	    top: 400,
	    fill: 'blue',
	    width: 20,
	    height: 20
	});
    canvas.add(rect);
    let options = new fabric.Rect({
    	top: 10,
 		left: 10,
 		width: 50,
 		height: 50,
 		hasBorder: true,
     	stroke: 'yellow',
 		strokeWidth: 3,
  		fill:'grey'
  		
    });
    canvas.add(options);
}

run();
