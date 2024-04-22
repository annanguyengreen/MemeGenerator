
const imageLink = document.querySelector('input[name=image-link]');
const topText = document.querySelector('input[name=top-text]');
const bottomText = document.querySelector('input[name=bottom-text]');
const form = document.querySelector('#meme-form');
const memeArea = document.querySelector('#meme-container');
const submitButton = document.querySelector('#submit-button');


imageLink.addEventListener('input', function() {
    submitButton.classList.add('button-glow');
});


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(imageLink.value) {
        addMeme(imageLink.value, topText.value, bottomText.value);
        imageLink.value = '';
        topText.value = '';
        bottomText.value = '';
        submitButton.classList.remove('button-glow');
    } else {
        alert("Please paste an image URL to make your meme!")
    }
    
});


function addMeme(link, topText, bottomText) {
    // create divs for the meme container, top text, and bottom, and create the image 
    newDiv = document.createElement('div');
    newMeme = document.createElement('img');
    topDiv = document.createElement('div');
    bottomDiv = document.createElement('div');

    // set top and bottom div text content the user supplied text
    topDiv.textContent = topText;
    bottomDiv.textContent = bottomText;

    // add classes that control the font and positioning
    topDiv.classList.add("meme-text");
    topDiv.classList += " top-text";
    bottomDiv.classList.add("meme-text");
    bottomDiv.classList += " bottom-text";

    // add class to the meme div that controls size and position of the final meme
    newDiv.classList.add("meme");

    // set the meme image to the user input URL
    newMeme.src = link;

    // append image and text divs to the containing div
    newDiv.append(topDiv);
    newDiv.append(bottomDiv);
    newDiv.append(newMeme);

    // add listener to each div to remove a meme when click
    newDiv.addEventListener('click', function(e) {
        e.target.parentElement.remove();
    }) 

    // add the meme containing div to the meme area
    memeArea.append(newDiv);
}

