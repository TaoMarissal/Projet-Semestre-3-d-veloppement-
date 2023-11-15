let joueur = new Joueurs('Tao');
const TailleBloc = 50;

function graphisme(){
    var canvas = document.querySelector('.canvas');
    var context = canvas.getContext('2d');

    // Clear the canvas before drawing
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a red square (cube) of size 50x50 at coordinates (275, 275)
    for (let i = 0; i < map[joueur.MapX][joueur.MapY].length; i++) {
        for (let j = 0; j < map[joueur.MapX][joueur.MapY][i].length; j++) {
            if(map[joueur.MapX][joueur.MapY][i][j]==1){
                context.fillStyle = 'red';
                context.fillRect(j*TailleBloc, i*TailleBloc, 50, 50);
            }
            if(map[joueur.MapX][joueur.MapY][i][j]==2){
                context.fillStyle = 'blue';
                context.fillRect(j*TailleBloc, i*TailleBloc, 50, 50);
            }
        }
    }
    context.fillStyle = 'green';
    context.fillRect(joueur.pos[0]*TailleBloc, joueur.pos[1]*TailleBloc, 50, 50);
}
graphisme();

document.addEventListener('keyup', function(event) {
    const keyCode = event.code;
    switch (keyCode) {
        case 'KeyW':
            joueur.deplacement('Z');
            break;
        case 'KeyA':
            joueur.deplacement('Q');
            break;
        case 'KeyS':
            joueur.deplacement('S');
            break;
        case 'KeyD':
            joueur.deplacement('D');
            break;
        default:
            break;
    }
    console.log("ceci est prepos "+joueur.prepos[0] +" "+joueur.prepos[1]);
    if(joueur.verif()){
        joueur.pos[0] = joueur.prepos[0];
        joueur.pos[1] = joueur.prepos[1];
    }else{
        joueur.prepos[0] = joueur.pos[0];
        joueur.prepos[1] = joueur.pos[1];
    }

    graphisme();
});


// console.log("ceci est prepos "+joueur.prepos[0] +" "+joueur.prepos[1]);
// console.log("ceci est pos "+joueur.pos[0] +" "+joueur.pos[1]);