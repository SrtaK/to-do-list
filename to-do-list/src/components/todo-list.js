import { LitElement, html } from 'lit-element';

export class TodoList extends LitElement {

  static get properties() {
    return {
      items: { type:Array }
      
    };
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
      ${
        this.items.map( item => html`<todo-item @eit-switch-checked="${this.newChecked}" .task=${item}></todo-item>
`)
      }

    <todo-item task='{"name" : "de la lista", "completed" : true }'></todo-item>
    <todo-item task='{"name" : "tambien listado", "completed" : false }'></todo-item>
    `;
  }

  newChecked(e){
    console.log('esto es estopa')
  }
}
customElements.define('todo-list', TodoList);