//Need to implement an array that creates it from all the media in the media dir
var images = ["media/img1.png","media/img2.png"];

var index = 0;

var img = document.getElementById("img");

function changeImage(){
    index++;

    if(index == images.length){
        index = 0;
    }

    img.src = images[index];

}

setInterval(changeImage,3000)