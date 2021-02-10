import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Popup from 'reactjs-popup';


class ClientTaskList extends Component {

  render() {      
    return (
      <div>
        {JSON.stringify(this.props.task)}
        <p>Task: {this.props.task.task_name} </p>
        <p>Date Scheduled: {this.props.task.scheduled_date} </p>
        <p>NLT Date: {this.props.task.nlt_date} </p>    
        <p>Status: {this.props.task.status_type}</p> 
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ClientTaskList);