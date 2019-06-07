import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser, getUser, deleteUser } from '../actions/userActions';

class Listitem extends React.Component {

  onUpdate(id) {
    this.props.updateUser(id);

  }


  onUser(id) {
    
    this.props.getUser(id);

  }


  onDelete(id) {
    
    this.props.deleteUser(id);

  }


  render() {
    const { user } = this.props;

    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.remember.toString()}</td>
        <td>
          <Link
            to={{
              pathname: "/viewform",
              state: {
                id: user._id
              }
            }}
            className="btn btn-success"
          >
            view
          </Link>
        </td>
        <td>
          <Link
            to={{
              pathname: "/editform",
              state: {
                id: user._id
              }
            }}
            className="btn btn-primary"
          >
            edit
          </Link>
        </td>
        <td>
          <button
            onClick={this.onDelete.bind(this, user._id)}
            type="button"
            className="btn btn-danger mr-1"
          >
            x
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = state => ({
  
});

export default connect(
  mapStateToProps,
  { updateUser, getUser, deleteUser }
)(Listitem);
