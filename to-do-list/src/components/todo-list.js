import { LitElement, html, css } from 'lit-element';

export class TodoList extends LitElement {

  static get properties() {
    return {
      tasks: { type:Array },
      query: { type: String },
      order: { type: String }
      
    };
  }

  static get styles() {
    return css`
    :host {
      display: block;
      margin: 15px 0;
      padding: 15px;
      border: 1px solid #4ae;
      border-radius: 10px;
      font-family: sans-serif;
    }
    section {
      margin-left: 10px;
    }
    article {
      flex-grow: 1;
    }
    button {
      margin-right: 15px;
    }
    div {
      border-radius: 10px;
      height: 30px;
      background-color: #eee;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      padding: 0 15px;
    }
    span {
      margin-right: 10px;
    }
    `;
  }

  constructor() {
    super();
    this.items = [
        {
          name: 'uno',
          completed: false
        
        },
        {
          name: 'dos',
          completed: false
        
        },
        {
          name: 'tres',
          completed: true
          
        },
    ]
  }
  render() {
    return html`

      <div>
        <article>
          <button @click=${this.setFilterAsc}>Asc</button>
          <button @click="${this.setFilterDesc}">Desc</button>
        </article>
        <span>Filtro:</span> <input type="text" @input="${this.changeFilter}">
      </div>

      ${
        this.tasks.map( item => html`<todo-item .task=${item}></todo-item>`)
      }
    `;
  }

}
customElements.define('todo-list', TodoList);