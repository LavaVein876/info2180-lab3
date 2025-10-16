

window.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById("Board");
    const cells = board.querySelectorAll("div");
    cells.forEach(cell => cell.className.add("square"));
})