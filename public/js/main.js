//Time to load the image
import SpriteSheet from './SpriteSheet.js';
import {imageLoad} from './loaders.js';




const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillRect(0,0,50,50);

imageLoad('/img/tiles.png')
.then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('ground',0,0);
    sprites.define('sky', 3, 23)

    for (let x=0;x<25;++x){
        for(let y=0;y<14;++y){
            sprites.draw('sky', context, x*16,y*16)
        }
    }
    
    // context.drawImage(image,
    //     0,0,16,16, // first two define which tile up, last two define which time bottom (vertical vs horizontal)
    //     32,32,48,48, ) // first two define where you want to draw the image, last two define the size of the thing you're drawing
});