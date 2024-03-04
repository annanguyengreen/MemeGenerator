function generateMeme() {
    let imageUrl = document.getElementById('imageUrl').value;
    let topText = document.getElementById('topText').value;
    let bottomText = document.getElementById('bottomText').value;
    let memeContainer = document.getElementById('memeContainer');

    let containerElement = document.getElementById('container');
    let imageElement = document.createElement('img');
    imageElement.src = imageUrl;
 
    imageElement.onload = function() {
        let meme = document.createElement('div');
        meme.style.position = 'relative';
        meme.style.display = 'inline-block';

  
        let topTextElement = document.createElement('div');
        topTextElement.innerText = topText;
        topTextElement.style.position = 'absolute';
        topTextElement.style.top = '10px';
        topTextElement.style.left = '50%';
        topTextElement.style.transform = 'translateX(-50%)';
        topTextElement.style.color = 'black';
        topTextElement.style.font = 'bold 24px sans-serif';
        topTextElement.style.textAlign = 'center';

        let bottomTextElement = document.createElement('div');
        bottomTextElement.innerText = bottomText;
        bottomTextElement.style.position = 'absolute';
        bottomTextElement.style.bottom = '10px';
        bottomTextElement.style.left = '50%';
        bottomTextElement.style.transform = 'translateX(-50%)';
        bottomTextElement.style.color = 'black';
        bottomTextElement.style.font = 'bold 24px sans-serif';
        bottomTextElement.style.textAlign = 'center';

        meme.appendChild(imageElement);
        meme.appendChild(topTextElement);
        meme.appendChild(bottomTextElement);

        memeContainer.innerHTML = '';
        memeContainer.appendChild(meme);
    };
}
