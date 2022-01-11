import css from './styles.css';

class GreetingClass extends HTMLElement {
    connectedCallback() {
        const element = document.createElement('div');
        element.innerHTML = `Hello World`;
        document.body.appendChild(element);
    }
}

customElements.define('app-greeting',GreetingClass);