import { LitElement, html, css } from 'lit-element';
import './components/todo-item';
import './components/todo-list';
import './components/todo-add';


export class TodoApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    };
  }

  constructor() {
    super();
    this.todos = [
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
    ];
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
    <todo-add 
    @task-added="${this.createTask}"></todo-add>
    <todo-list 
    id="listado" 
    .items="${this.todos}"
    @eit-switch-checked="${this.taskChanged}"
    ></todo-list>
      
    `;
  }

  createTask(e){
   /*  //console.log('createTask', e.detail);
    this.todos.push({
      name: e.detail,
      completed: false
    });
    this.shadowRoot.getElementById('listado').requestUpdate(); */
    //Creo un nuevo array de todos
    this.todos = [
      //quiero que todos los elementos de todos se mantengan 
      ...this.todos,
      {
        //y añadir los nuevos
        name: e.detail,
        completed: false
      }
    ]
  }

  taskChanged(e){
    console.log('checked', e.detail)
  }
}
customElements.define('to-do-app', TodoApp);
