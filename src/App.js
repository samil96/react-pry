import React, { Component } from 'react';
import './App.css';

/*
Variables:
tasks: contener la lista de tareas
*/

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: "",
      tasks: []
    }
  }

  handleTaskChange = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }

  /*Funcion para evitar que se recargue la pagina con onsubmit y asi también evitar que se
  publique dos veces. 
  */
  handleSubmit = (event) => {
    event.preventDefault();
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask)
    this.setState({
      newTask: "",
      tasks: newTasks
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Hola Lesly, eres un ángel <span aria-label="emoji" role="img">😍😍</span></h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            value= {this.state.newTask}
            onChange={this.handleTaskChange}
            type="text"
            className="new-task"
          />
        </form>
        <h2 className="test-label">{this.state.newTask}</h2>
        {
          this.state.tasks.map(task =>
            <div className="task-container">
            <h3 className="task">{task}</h3>
            </div>
           )
        }  
      </div>
    );
  }
}

export default App;