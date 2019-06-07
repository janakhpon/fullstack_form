import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/userActions";
import Listitem from "./Listitem";

class Displaylist extends React.Component {
  componentDidMount() {
    this.props.getUsers();

    console.log(this.props.getUsers());
  }

  render() {
      const { users } = this.props.user;
      let userItems;

    if (users === null) {
      userItems = <p>nothing</p>;
    } else {
      if (users.length > 0) {
       userItems = users.map(user => (
          <Listitem key={user._id} user={user} />
        ));
      } else {
        userItems = (
          <tr>
            <td>No data found...</td>
          </tr>
        );
      }
    }

    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">NAME </th>
            <th scope="col">EMAIL</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">REMEMBER</th>
            <th scope="col">VIEW</th>
            <th scope="col">UPDATE</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>{userItems}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Displaylist);
