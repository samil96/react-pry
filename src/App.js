import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import Layaout from './components/layout';
import TaskList from './components/task-list';
import Input from './components/input';

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

  /*Funcion para evitar que se recargue la pagina con preventDefault y asi también evitar que se
  publique dos veces. Otra función de handleSubmit es para 
  almacenar los datos del input en nuestro arreglo de tareas en el estado.
  Esta función guarda una copia de las tareas actuales en newTasks y luego desplazar que el 
  contenido escrito del input en el arreglo (tasks) 
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

  handleDelete = (id) => {
    let newTasks = this.state.tasks;
    newTasks.splice(id, 1)
    this.setState({
      tasks: newTasks,
    })
  }

/* con el evento onchange se agrega un nuevos elementos al tasks, por medio de submit del input
onsubmit hara enter para agregar nuevo elemento, esto se hace con la función handleSubmit
*/

/*
La función map genera un nuevo componente con su contenido, que recibe como parametro una
función que se ejecutar cada elemento del arreglo

*/
  render() {
    return (
      <Layaout>
        <Title/>
        <Input
          handleSubmit={this.handleSubmit}
          handleTaskChange={this.handleTaskChange}
          value={this.state.newTask}
        />
        <TaskList 
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
        />
      </Layaout>
    );
  }
  
}

export default App;