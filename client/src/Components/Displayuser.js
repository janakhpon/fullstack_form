import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/userActions';

class Displayuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "", remember: false };
  }

    
  componentDidMount() {
    const { id } = this.props.location.state;
    this.props.getUser(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.user) {
      const user = nextProps.user.user;

      // Set component fields state
      this.setState({
        name: user.name,
        email: user.email,
        password: user.password,
        remember: user.remember
      });
    }
  }

  render() {
    return (
      <div className="card text-center bg-dark">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">{this.state.name}</h5>
          <p className="card-text">{this.state.email}</p>
          <p className="card-text">{this.state.password}</p>
                <p className="card-text">{this.state.remember.toString()}</p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {  getUser }
)(Displayuser);

