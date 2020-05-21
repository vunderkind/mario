//Time to load the image
import SpriteSheet from './SpriteSheet.js';
import {imageLoad, loadLevel} from './loaders.js';

function drawbackground(background, context,sprites){
    background.ranges.forEach(([x1,x2,y1,y2]) =>{
        for (let x=x1;x<x2;++x){
            for(let y=y1;y<y2;++y){
                sprites.drawTile(background.tile, context, x,y)
            }
        }
    });
}


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

imageLoad('/img/tiles.png')
.then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('ground',0,0);
    sprites.define('sky', 3, 23)

    loadLevel('1-1')
        .then(level =>{
            console.log(level)
            level.backgrounds.forEach(background => {
            drawbackground(background, context, sprites)
        });

    });

    
    
    // context.drawImage(image,
    //     0,0,16,16, // first two define which tile up, last two define which time bottom (vertical vs horizontal)
    //     32,32,48,48, ) // first two define where you want to draw the image, last two define the size of the thing you're drawing
});