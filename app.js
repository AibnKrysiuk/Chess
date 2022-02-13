const WIDTH = 800;
const HEIGHT = 800;

//filas y columnas

const FILES = 8;
const RANKS = 8;

//tamaño de las celdas
const CELL_WIDTH = WIDTH / FILES;
const CELL_HEIGHT = HEIGHT / FILES;

//creo el canvas desde el archivo js
const $canvas = document.createElement('canvas');
//accedo al contexto para manipular los pixels
const ctx = $canvas.getContext('2d');

$canvas.width = WIDTH;
$canvas.height = HEIGHT;

//muestro el canvas en el documento HTML
document.body.appendChild($canvas);
document.body.style.display = 'grid';
document.body.style.placeItems = 'center';
document.body.style.height = '100%';
document.body.parentElement.style.height = '100%';
document.body.style.backgroundColor = '#333333';


const theme = {
    light: '#DAF7A6',
    dark: '#05C5A5',
}

const pieceTheme = {
    light: '#FFFFFF',
    dark: '#000000',
}
//♔♕♖♗♘♙  ♚♛♜♝♞♟
const pieces = {
    king: ['♔','♚'],
    queen: ['♕','♛'],
    rook: ['♖','♜'],
    bishop: ['♗','♝'],
    knight: ['♘','♞'],
    pawn: ['♙','♟'],
}

//array de dos dimensiones para las celdas


//pinto las celdas
const renderBoard = ()=> {
    for (let x = 0; x < FILES; x += 1){
        for (let y = 0; y < RANKS; y += 1){
            let rectColor = theme.light;
            let textColor = theme.dark;
    
            if ((x+y) % 2){
                rectColor = theme.dark;
                textColor = theme.light;
            }
    
            ctx.fillStyle = rectColor;
            ctx.fillRect(x * CELL_WIDTH,y * CELL_HEIGHT,CELL_WIDTH, CELL_HEIGHT);
            //posicion
            ctx.fillStyle = textColor;

            ctx.textBaseline = 'top';
            ctx.textAlign = 'start';
            ctx.font = '8px Arial';
            ctx.fillText(`[${x};${y}]`,x * CELL_WIDTH + 10, y * CELL_HEIGHT + 10);
            
            //dibujo pieza
            const piece = boardMatrix[x][y];
            if(piece){
                ctx.fillStyle = piece.color;
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.font = '64px Arial';
                ctx.fillText(piece.type[1],x * CELL_WIDTH + CELL_WIDTH / 2, y * CELL_HEIGHT + CELL_HEIGHT / 2);
                ctx.fillStyle = pieceTheme.dark;
                ctx.fillText(piece.type[0],x * CELL_WIDTH + CELL_WIDTH / 2, y * CELL_HEIGHT + CELL_HEIGHT / 2);    
            }
        }
    }
}

//inicializo el tablero
const boardMatrix = [];
for (let x = 0; x < FILES; x += 1){
    boardMatrix[x] = [];
    for (let y = 0; y < RANKS; y += 1){
        boardMatrix[x][y] = null;
    }
}

//ubicar piezas
for (let i=0; i < RANKS; i += 1){
    boardMatrix[i][1] = {
        type: pieces.pawn,
        color: pieceTheme.dark,
    }
    boardMatrix[i][6] = {
        type: pieces.pawn,
        color: pieceTheme.light,
    }
}

for(let i = 0; i < 2; i+=1){
    boardMatrix[0][i * 7] = {
        type: pieces.rook,
        color: i ? pieceTheme.light : pieceTheme.dark,
    }
    boardMatrix[7][i * 7] = {
        type: pieces.rook,
        color: i ? pieceTheme.light : pieceTheme.dark,
    }
    boardMatrix[1][i * 7] = {
        type: pieces.knight,
        color: i ? pieceTheme.light : pieceTheme.dark,
    }
    boardMatrix[6][i * 7] = {
        type: pieces.knight,
        color: i ? pieceTheme.light : pieceTheme.dark,
    }
    boardMatrix[2][i * 7] = {
        type: pieces.bishop,
        color: i ? pieceTheme.light : pieceTheme.dark,
    }
    boardMatrix[5][i * 7] = {
        type: pieces.bishop,
        color: i ? pieceTheme.light : pieceTheme.dark,
    }
    boardMatrix[3][i * 7] = {
        type: pieces.queen,
        color: i ? pieceTheme.light : pieceTheme.dark,
    }
    boardMatrix[4][i * 7] = {
        type: pieces.king,
        color: i ? pieceTheme.light : pieceTheme.dark,
    }
}

renderBoard();
console.log(boardMatrix);