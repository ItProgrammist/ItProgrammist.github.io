// let field = document.getElementById('field');
let ctx = field.getContext("2d"); // Контекст для рисования

field.width = window.innerWidth;
field.height= window.innerHeight;

function draw(){
    let bg = new Image(width = field.width, height = field.height); //  параметры принимаются автоматически
    bg.src = "https://github.com/ItProgrammist/Pages/blob/master/img/background.jpg?raw=true";
    bg.onload = () => {
        ctx.drawImage(bg, 0, 0);
    }
}
draw();

function draw2(){
    player.sprite.src = "https://github.com/ItProgrammist/Pages/blob/master/img/player.png?raw=true";
    player.sprite.onload = () => {
        ctx.drawImage(player.sprite, player.X, player.Y);
    }
}

let player = {
    sprite: new Image(100,100),
    X: 0,
    Y: 0
}


$(field).on("mousemove",
    function(e){
        player.X = e.offsetX;
        player.Y = e.offsetY;
        player.sprite.width = 0;
        draw2();

});
