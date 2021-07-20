// let field = document.getElementById('field');
let ctx = field.getContext("2d"); // Контекст для рисования

document.body.style.backgroundImage = `url("img/background.jpg")`
field.width = window.innerWidth;
field.height= window.innerHeight;

// Корабль №1
let player = {
    sprite: new Image(),
    size: {x: 100, y:100},
    pos: {x: 0, y: 0}
}

// Пуля
let bullet = {
    sprite: new Image(),
    size: {x: -22.5, y: 63},
    pos: {x: 123, y: 35}
}

$(document).ready(function () {
    
    player.sprite.src = "img/shuttle.png";
    player.sprite.width = player.size.x;
    player.sprite.height = player.size.y;

    bullet.sprite.src = "img/bullet1.png";
    player.sprite.width = player.size.x;
    player.sprite.height = player.size.y;

    let bg = new Image(field.width, field.height);
    bg.src = "img/background.jpg";
    bg.onload = ()=>{
        ctx.drawImage(bg, 0, 0);
    }

    
    
});


$(field).on("click", function(){

        // Анимация пули для корабля №1
        let start = Date.now();

        let y_position = bullet.pos.y // Изначальное положение пули по оси Y
    
          let timer = setInterval(function() {
            let timePassed = Date.now() - start;
    
            bullet.pos.y = (y_position); // Скорость движения пули
    
            y_position -= 17;
    
            if (timePassed > 200){
                clearInterval(timer);
            }
    
          });

});

function renderObject(sprite, posX, posY){
    //console.log(sprite)
    ctx.drawImage(sprite, posX, posY);
}

$(field).on("mousemove", function(e){
    //Положение корабля
    player.pos.x = e.offsetX - player.size.x;
    player.pos.y = e.offsetY - player.size.y;

    //Положение пули
    bullet.pos.x = e.offsetX - bullet.size.x;
    bullet.pos.y = e.offsetY - bullet.size.y;

});



setInterval(function(){  
    ctx.clearRect(0, 0, field.width, field.height) // Удаляем картинку каждую 1 секунду 60 раз

    // Отрисовка корабля и пули
    renderObject(player.sprite, player.pos.x, player.pos.y);
    renderObject(bullet.sprite, bullet.pos.x, bullet.pos.y);
    
}, 1000/60);
