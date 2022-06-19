const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 778;
const CANVAS_HEIGHT = canvas.height = 625;
const spriteWidth = 1038;
const spriteHeight = 833;
let gameFrame = 0;
let stagger = 0;
const staggerFrame = 5;
let index = 3;
let playerState = 'run';

const dropdown = document.getElementById('animations');

dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

const myImg = document.getElementById('myImg');

const animationStates = [
    {
        name: 'run',
        frames: 4,
    },
    {
        name: 'attack',
        frames: 6,
    },
    {
        name: 'jump',
        frames: 9,
    },
    {
        name: 'dash',
        frames: 7,
    }
];

const spriteAnimations = ['run', 'attack', 'jump', 'dash'];

function animate(){
    if((stagger % staggerFrame) == 0){
        ctx.clearRect(0 , 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        index = spriteAnimations.indexOf(playerState);
        let frameX = spriteWidth * (gameFrame % (animationStates[index].frames));
        let frameY = spriteHeight * index;
        ctx.drawImage(myImg,frameX,frameY,spriteWidth,spriteHeight,
            0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        gameFrame++; 
    }
    stagger++;
    
    requestAnimationFrame(animate);
}
animate();

