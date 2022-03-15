import { html, render } from "lit-html";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators';

export class SudokuBoardComponent extends HTMLElement {

    connectedCallback() {
        const template = html `
            <div class="sudokuboard-row">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>`;

        render(template,this);
    }
}
customElements.define('sudoku-board',SudokuBoardComponent);