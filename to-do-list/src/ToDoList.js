import { LitElement, html, css } from 'lit-element';

export class ToDoList extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
  
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <h1>Probando commit</h1>
      
    `;
  }
}
