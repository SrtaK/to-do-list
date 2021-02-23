import { LitElement, html, css } from 'lit-element';

class TodoItem extends LitElement {

  static get properties() {
    return {
      task: { type: Object }
    };
  }

  static get styles() {
    return css`
    p {
      display: flex;
      align-items: center;
    }
    eit-switch {
      margin-right: 10px;
    }
    .completed {
      text-decoration: line-through;
      color: #888;
    }
    `;
  }

  //está la task completada? si lo está quiero que le pongas la clase completed en caso contrario no pongas clase alguna
  render() {
    return html`
      <p class="${this.task.completed ? 'completed' : ''}">
        <eit-switch ?checked="${this.task.completed}" @eit-switch-checked="${this.checkedChanged}"></eit-switch>

        ${ this.task.name }
      </p>
    `;
  }

  //Cómo se si estoy chequeado
  checkedChanged(e){
    console.log('checkedChanged', e);
    } 
  

}
customElements.define('todo-item', TodoItem);