

window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = board.querySelectorAll('div');
    cells.forEach(cell => cell.classList.add('square'));


    const status = document.getElementById('status');
    const gameState = Array(9);
    let next = true

    const winCheck = (i, j, k) => {
        const v = gameState[i];
        return (v && v === gameState[j] && v === gameState[k]) ? v : null;
        
    };

    const diagonalWinner = () => {
        return winCheck(0,4,8) || winCheck(2,4,6);
    };

    const columnWinner = () => {
        return winCheck(0,3,6) || winCheck(1,4,7) || winCheck(2,5,8);
    };

    const rowWinner = () => {
        return winCheck(0,1,2) || winCheck(3,4,5) || winCheck(6,7,8);
    };

    cells.forEach((cell, i) => {
        cell.addEventListener('click', () => {
            if (gameState[i]) return;
            const player = next? 'X' : 'O';
            gameState[i] = player;
            cell.textContent = player;
            cell.classList.add(player);
            next = !next;

            const winner = diagonalWinner() || rowWinner() || columnWinner();
            if (winner){
                status.textContent = `Congratulations! ${winner} is the winner!`;
                status.classList.add('you-won');
            }
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

    document.querySelector('.btn').addEventListener('click', () =>{
        window.location.reload();
    });


});