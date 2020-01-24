var fs = require('fs'); //Node package
var https = require('https'); //Node module

/*
  writeFile is a method of the FS package
  a, b, c are arguments
  a = location in your computer
  b = what you want within the file 
  c = function that will run once the method (write file) action has either succedded or failed. = callback function
*/
fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log("Congrats - file created");
  }
});

var myPhotoLocation = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';

//use method get from the https module
https.get(myPhotoLocation, function(response) {
  // save the image in my computer, in my current file
  response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});