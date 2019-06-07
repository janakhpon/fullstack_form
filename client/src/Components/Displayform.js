import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";

class Displayform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "", remember: false };

    this.onChange = this.onChange.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onToggle = () => {
    this.setState({ remember: !this.state.remember });
  };

  onSubmit(e) {
    e.preventDefault();

       const userData = {
         name: this.state.name,
         email: this.state.email,
         password: this.state.password,
         remember: this.state.remember
       };

       this.props.addUser(userData);
  }

  render() {
    return (
      <div className=" card mb-3 bg-dark ">
        <div className="card-body text-left">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Your name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="exampleInputEmail"
                aria-describedby="emailHelp1"
                placeholder="Enter name"
                value={this.state.name}
                onChange={this.onChange}
              />
              <small id="emailHelp1" className="form-text text-muted">
                We'll never share your name with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="remember"
                className="form-check-input"
                id="exampleCheck1"
                value={this.state.remember}
                onChange={this.onToggle}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              SIGNUP
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { addUser }
)(Displayform);
