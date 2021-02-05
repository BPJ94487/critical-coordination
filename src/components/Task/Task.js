import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name Task with the name for the new
// component.
class Task extends Component {

  state = {
    // toggle edit mode on and off to conditionally render input fields or static elements
    edit: false,
    task: {}
  }

  // handle navigation from buttons on page
  navigate = web_address => {
    this.props.history.push(web_address);
  }

  async componentDidMount() {
    this.props.dispatch({
      type: 'CLEAR_TASK'
    });
    this.props.dispatch({
      type: 'FETCH_TASK',
      payload: 2
    });
  }

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      // change the task property for the input being changed
      task: { ...this.state.task, [propertyName]: event.target.value },
    });
  };

  handleEditButton = () => {
    this.state.edit
      // if coming out of edit mode, send changes to task store
      ? this.updateTask()
      // if going into edit mode, put the task store into local state
      : this.setState({
        task: this.props.store.task
      })
    this.setState({ edit: !this.state.edit })
  }

  updateTask = () => {
    console.log('task will be updated to', this.state.task);
  }


  render() {
    return (
      <div className="container">
        <h2>Task Page</h2>
        <p>
          Task store: {JSON.stringify(this.props.store.task)}
        </p>
        <p>
          Local state: {JSON.stringify(this.state)}
        </p>
        <button onClick={() => this.navigate('/portfolio')} >Button to the portfolio page</button>
        <div className="taskPanel">
          {
            this.state.edit
              ?
              <div>
                {/* if in edit mode, render form items */}
                <form>
                  {Object.keys(this.props.store.task).map((element, i) => {
                    if (this.state.task[element]) {
                      console.log('here is the element value', this.state.task[element]);
                      return (
                        <label htmlFor={element}>
                        Task {element}:
                        <input
                          type="text"
                          name={element}
                          value={this.state.task[element]}
                          required
                          onChange={this.handleInputChangeFor(element)}
                          />
                      </label>
                    )
                  }
                  })}
                </form>
              </div>
              :
              Object.keys(this.props.store.task).map((element, i) => {
                return (
                  <div>
                    <p>Task {element}: {this.props.store.task[element]}</p>
                  </div>
                )
              })
          }
          <button onClick={() => this.handleEditButton()}>
            {this.state.edit
              ? "Save"
              : "Edit"}
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Task);