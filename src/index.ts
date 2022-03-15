import './app/board/boundary/sudoku-board.component';
import './styles.css';

class GreetingClass extends HTMLElement {

    connectedCallback() {
        const element = document.createElement('div');
        element.innerHTML = `
            <h1>Sudoku</h1>
            <sudoku-board></sudoku-board>
        `;
        document.body.appendChild(element);
    }
}

customElements.define('app-sudoku',GreetingClass);