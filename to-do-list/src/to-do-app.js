
import { LitElement, html, css } from 'lit-element';

export class TodoApp extends LitElement {
  static get properties() {
    return {
      heading: { type: String },
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
    <h1> To do App </h1>
   
      
    `;
  }
}
customElements.define('to-do-app', TodoApp);
