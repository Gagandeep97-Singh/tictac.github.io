const cells = document.querySelectorAll(".cell");
let xturn = 'X';
let oturn = 'O';
let currentturn;
let turn = document.querySelector('.text-1');
let result=document.querySelector('.result-1');
let box=document.querySelector('.box');
let winner=document.querySelector('.winner');
let btn=document.querySelector('.btn');





const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  function checkwin() {
    wins.forEach(e=>{
        if ((cells[e[0]].innerHTML===cells[e[1]].innerHTML)&&(cells[e[1]].innerHTML===cells[e[2]].innerHTML)&&(cells[e[0]].innerHTML!=='')) {
            result.innerHTML=cells[e[0]].innerHTML
            box.style.display='block';
            winner.innerHTML='PLAYER'+" "+cells[e[0]].innerHTML+" "+'WIN THE GAME'
        }
      
    })   
}



for (let i = 0; i < cells.length; i++) {
    const element = cells[i];
    element.addEventListener('click',function () {
        cells[i].innerHTML=xturn;
        if (currentturn==xturn) {
            currentturn=oturn;
            cells[i].innerHTML=oturn;
        } else {
            currentturn=xturn;
            cells[i].innerHTML=xturn;  
        }
        turn.innerHTML=currentturn;  
        checkwin();
    }) 
}

btn.addEventListener('click',function() {
    box.style.display='none';
    window.location.reload();
    
})