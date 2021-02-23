import { LitElement, html, css } from 'lit-element';
import './components/todo-item';
import './components/todo-list';


export class TodoApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    };
  }

  constructor() {
    super();
    this.todos = [];
  }

  static get styles() {
    return css`
    :host{
      display: block;
      padding:15px;
    }
  
    `;
  }


  render() {
    return html`
    <h1> To do App </h1>
    <todo-add></todo-add>
    <todo-list .todos="${this.todos}"></todo-list>
      
    `;
  }
}
customElements.define('to-do-app', TodoApp);
