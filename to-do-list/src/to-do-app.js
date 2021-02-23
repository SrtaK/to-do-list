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
        completed: false,
        id: 0
      },
      {
        name: 'dos',
        completed: false,
        id: 1
      },
      {
        name: 'tres',
        completed: true, 
        id: 2
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
    .tasks="${this.todos}"
    @task-changed="${this.taskChanged}"
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
        completed: false, 
        id: this.todos.length
      }
    ]
  }

  taskChanged(e){
    console.log('taskchandgeked', e.detail);
    //con el método map itero sobre los elementos  del array modifico los que necesite y devuelvo un nuevo elemento transformado
    this.todos = this.todos.map(item => {
      if(item.id == e.detail.task.id){
        return {
          ...item,
          //modifico el estado
          completed: e.detail.state
        }
      }else{
        return item;
      }
    })
  }
}
customElements.define('to-do-app', TodoApp);
