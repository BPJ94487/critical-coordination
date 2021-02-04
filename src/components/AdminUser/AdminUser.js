import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../AdminUser/AdminUser.css'


class AdminUser extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

  async componentDidMount() {
    // Get's data to populate lists/tables
    this.props.dispatch({type: 'FETCH_ALLUSERS'});
  }

  state = {
    stateBuffer: 0,
  }


  render() {
    return (
      <div>
        <h3>Admin <span style={{textDecoration: "underline"}}>User</span> Page, {this.props.store.user.first_name}!</h3>

              <button >Add Task Status</button>
              <ul>
                {this.props.store.admin.allUsersReducer.map((lineItem, index) => {
                    return (
                        <div key={index}>
                          {/* {JSON.stringify(lineItem)} */}
                          <li>ID: {lineItem.id} {lineItem.email} - Name: {lineItem.first_name} {lineItem.last_name}  - Company: {lineItem.company_name} <button className="adminButtonClass">Modify</button><button className="adminButtonClass">Delete</button></li>
                        </div>
                    );
                })} 
              </ul>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(AdminUser);
