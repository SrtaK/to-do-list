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
    this.items = [];
    this.order = 'asc';
    this.query = ''; 
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
        //bindeo a un metodos del componente, cada vez que cambien las propiedades se llamará a doOrder
        //cada vez que cambie task, order o query
        this.getItems(this.tasks, this.query, this.order).map( item => html`<todo-item .task=${item}></todo-item>`)
      }
    `;
  }

  
  getItems(tasks, query, order){
    return this.doOrder(this.doFilter(tasks, query), order);
  }

  doFilter(tasks, query) {
    console.log('dofilter')
    //el metodo filter recibe un elemento y devuelve true o false si quiero que se quede ene el array o no
    return tasks.filter(item => {
      //si no tengo query quiero que queden todos los items
      if(!query) {
        console.log('no !query')
        return true;
      }
      //si el name está en la query devuelve la posisción exacta, si es distinto de -1 es que hexiste
      if (item.name.indexOf(query) != -1) {
        console.log('hay indexof')        
        return true;
      }
      //si no hay coincidencia con la query devuelve false
      console.log('false')
      return false;
    });
  }

  setFilterAsc(){
    console.log('setFilterAsc')
    this.order = 'asc';
    
  }

  setFilterDesc(){
    console.log('setFilterdesc')
    this.order = 'desc';
  }

  doOrder(tasks, order) {
    console.log('doOrder', tasks, order)
    return tasks.sort((a, b) => {
      let nameA, nameB;
      if(order == 'asc') {
        nameA = a.name.toLowerCase();
        nameB = b.name.toLowerCase();
      } else {
        nameB = a.name.toLowerCase();
        nameA = b.name.toLowerCase();
      }
      if(nameA > nameB) {
        return 1;
      }
      if(nameA < nameB) {
        return -1;
      }
      return 0;
    });
  }

  changeFilter(e){
    this.query = e.target.value;
  }

}
customElements.define('todo-list', TodoList);