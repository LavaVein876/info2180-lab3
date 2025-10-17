

window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = board.querySelectorAll('div');
    cells.forEach(cell => cell.classList.add('square'));


    const gameState = Array(9);
    let next = true
    cells.forEach((cell, i) => {
        cell.addEventListener('click', () => {
            if (gameState[i]) return;
            const player = next? 'X' : 'O';
            gameState[i] = player;
            cell.textContent = player;
            cell.classList.add(player);
            next = !next;
        });
    });

    cells.forEach((cell) =>{
        cell.addEventListener('mouseover', () =>{
            cell.classList.add('hover')
        });

        cell.addEventListener('mouseout', () =>{
            cell.classList.remove('hover')
        });
    });








});