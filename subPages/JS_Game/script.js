// let field = document.getElementById('field');
let ctx = field.getContext("2d"); // Контекст для рисования

document.body.style.backgroundImage = `url("https://github.com/ItProgrammist/Pages/blob/master/img/background.jpg?raw=true")`
field.width = window.innerWidth;
field.height= window.innerHeight;

let player = {
    sprite: new Image(),
    size: {x: 2, y:2},
    pos: {x: 0, y: 0}
}

$(document).ready(function () {
    

    player.sprite.src = "https://github.com/ItProgrammist/Pages/blob/master/img/player.png?raw=true";
    player.sprite.width = player.size.x;
    player.sprite.height = player.size.y;
    let bg = new Image(field.width, field.height);
    bg.src = "https://github.com/ItProgrammist/Pages/blob/master/img/background.jpg?raw=true";
    bg.onload = ()=>{
        ctx.drawImage(bg, 0, 0);
    }

    
});


function renderObject(sprite, posX, posY){
    console.log(sprite)
    ctx.drawImage(sprite, posX, posY);
}

$(field).on("mousemove", function(e){
    player.pos.x = e.offsetX - player.size.x/2;
    player.pos.y = e.offsetY - player.size.y/2;
});



setInterval(function(){  
    ctx.clearRect(0, 0, field.width, field.height) // Удаляем картинку каждую 1 секунду 60 раз
    renderObject(player.sprite, player.pos.x, player.pos.y);
    
}, 1000/60);
