# lmc2700
LMC 2700 Project 5

Hey!!! So grab the Project5 folder, it has all my stuff in it.

What works (or should, lmk if somethings weird):  
  -able to draw  
  -able to change pen size  
  -able to change pen color  
  -able to clear canvas and start over  
  
  What needs to be done
  -ability to save and store drawings  
    -MY IDEA: Store canvas objects in the same way I do colors[]. I initialize a bunch of <dev> objects with colors
    using a loop, maybe we can do the same with canvases? Then, set the "active" canvas to the current one, and each time the   
   save button is pressed the "active" tag switches to the next canvas and instead of clearing the canvas and saving it we just switch to a new canvas? If this is confusing go into the colors.js class and see the colors[] and how I initialize it, and then run the html file and (on mac) go to Develop->Show JavaScript Console -> Elements -> twirl down the colors dev. Every time a color is chosen, the color tag is changed to have "active" appended to it.
  
  -ability to view last canvas element: Once we can save and store this should be fairly easy   
  -ability to view the entire flipbook in a series once all done
 
 
 Extra Features (if time permits):  
  -add previous canvas as a transparent layer to make it easier for the user to add the next element in the flipbook  
  -add built-in shapes that can be applied (Again this will probably be achievable once we figure out how to store canvases)
