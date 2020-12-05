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
draw()

function draw2(){
    player.sprite.src = "https://github.com/ItProgrammist/Pages/blob/master/img/player.png?raw=true";
    player.sprite.onload = () => {
        ctx.drawImage(player.sprite,0,0)
    }
}

let player = {
    sprite: new Image(100,100),
    X: 0,
    Y: 0
}

let center = field.width / 2;
let halfPlayer = player.sprite.width / 2;


$(field).on("mousemove",
    function(e){
        player.X = e.offsetX;
        player.Y = e.offsetY;
        draw2();
        if (player.X>halfPlayer) {
            player.sprite.left = halfPlayer - player.X + 'px';
        } 
});