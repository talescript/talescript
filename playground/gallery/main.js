
// This is the variable that holds the data structure which
// contains the images we are going to display on the webpage
let pictures = [
    {
        "albumId": 1,
        "id": 1,
        "title": "Plumage feather bird pink",
        "url": "img/plumage-feather-bird-pink-66875.jpeg"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "Code wall",
        "url": "img/code.jpeg"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "Red blue bricks patter",
        "url": "img/red-blue-bricks-pattern-light.jpg"
    }
]

var CopyOfPictures = JSON.parse(JSON.stringify(pictures));

window.onload = function() {
    loadImages(pictures);
}

window.onclick = function(evt) {
    // defines which element it will listen to.
    let mainImg = document.querySelector(".listImg");
    // used the example to get the onclick to work
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
    test = showImage(evt);
    createImage(pictures, test);

}; 

window.ondblclick = function(evt) {
    imgId = showImage(evt);
    deleteImage(pictures, imgId);
    console.log("Image has been deleted")
}

// Reloading of images. How can it be done without placing oninput in the button element?
function reload() {
    loadImages(pictures);
}

    
// couldn't figure out how to delete the images.
function deleteImage(pictures, imgId) {
    var pics = document.querySelector(".listImg")
    pictures.forEach(function(pic, index) {
        if (imgId == pic.id) {
            var picToRemove = document.getElementById(imgId);
            //console.log(picToRemove);
            picToRemove.outerHTML = "";
            delete picToRemove;
        }
/* //        pictures.splice(index, 1);
        var elToRemove = "#"  + imgId.toString();
        var parent = document.querySelector(".listImg");
        var removeImg = document.querySelector(elToRemove);
        console.log(removeImg, "removeImg"); */
        /*
        if (imgId == erase.id) { 
            console.log(erase.url)
            el = document.querySelectorAll('img[title=erase]');
            console.log(el);
            /*
            console.log(index);
            image = pictures.splice(index, 1);
            console.log(image, "image");
            console.log(pictures, "pictures"); 
            //image = document.querySelector
        } */
    });
}

function loadImages(eachPicture) {
// loop that iterates over the list object
    eachPicture.forEach(function(currentImage, index) {
        // grabs the element where the images will be placed
        let section = document.querySelector(".listImg");
        // creates the img element
        let image = document.createElement("img");
        /* 
        let btn = document.createElement("button");
        let btn_text = document.createTextNode("Delete"); */
        // sets the attributes for the image element
        image.src = currentImage.url;
        image.alt = currentImage.title;
        image.width = "250";
        // while trying to get this to work I figured out that we can name the properties / attributes
        // anything we want and those will be added to the html. I think.
        image.id = currentImage.id;
        // btn.class = index;
        // Once we have created the element with all it's attributes
        // we append it to the section that will display the images
        section.appendChild(image);
        //btn.appendChild(btn_text);
        //section.appendChild(btn);
    });
}

function showImage(evt) {
    // grabs the id of what has been clicked / debugging - seeing if it works
    return evt.target.id;
    
    // now that we now the code works thanks to printing the output to the console
    // we are ready to code what the function will do for each click event.
    // A better way to do this would be to abstract the code within the forEach
    // loop in the loadImages function. That way we wouldn't have code repetition.
    // Maybe I'll abstract it later but for now, we will hardcode everything.
    // Actually, let's write a function right now and then replace the code 
    // within the loadImages function
}

// Here we will write a function that will create the image element.
// Since each image in the list has a distinct id, we will use that 
// the previous comment is the wrong assumption. 
// What we actually want to do is grab an image from the 
// pictures variable
// I ended up removing the id parameter and replacing it
// with a different parameter that makes sense. [Note: comment
// above the loop on why id is still there]
// Keep in mind that parameters are different from variables
// and don't conclict with the namespace. 
function createImage(picture, id) {
    // grab the element where we are going to work on
    // since it's a section I'll call the variable 'section'
    var section = document.querySelector(".mainImg");
    // we first need to loop the data structure to find the correct
    // element to operate on. So, the previous idea to use the 
    // id was correct. using two parameters might be a better
    // solution.
    // console.log("CreateImage Executed");
    picture.forEach(function(currentImage) {
        // console.log("looop executed");
        // console.log(id == currentImage.id);
        // console.log("id: ", id)
        // console.log("CurrentId: ", currentImage.id)
        if (id == currentImage.id) {
            // now we create the image element.
            // remember, here the element doesn't live in the dom yet.
            // we are merely creating it in the memory of the machine
            // thanks to the browser's capabilities of running javascript
            section.innerHTML = '';
            let image = document.createElement("img");
            let div = document.createElement("div");
            // sets the attributes for the image element
            image.src = currentImage.url;
            image.alt = currentImage.title;
            image.width = "250";
            // console.log(image, " createImage debug"); // debug
            image.id = currentImage.id;
            image.className = "slide-bottom";
            div.innerText = currentImage.title;
            section.appendChild(image);
            section.appendChild(div);
        }
    });
}

/* 
    Add new Images
*/
// https://static.pexels.com/photos/432832/pexels-photo-432832.jpeg
/*
        <form id="NewImage">
            <input type="url" name="pics" placeholder="Place image link" id="url">
            <button type="button">Add image</button>
        </form>
*/
/*
var form = document.querySelector("#newImage");
var imgUrl = form.elements['pics'];

if (window.addEventListener) {
    form.addEventListener('submit', )
}

Give up, couldn't figure out how to recieve events from a form */