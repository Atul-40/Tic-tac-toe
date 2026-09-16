class TwoPlayer {
    constructor() {
        this.#addEventListeners();
        
    }
    #addEventListeners() {
        const cells = document.querySelectorAll('.cell');
        const message = document.getElementById('message');
        const reset = document.getElementById('reset');
        let mode = 'x';

        cells.forEach(cell => {
                cell.addEventListener('click', () => {
                    const idx = Array.from(cells).indexOf(cell);
                    if (cell.textContent === '') {
                })
            })
    }
}