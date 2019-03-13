import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Modal from '../modal'
import {
  handleChange,
  handlePWChange,
  handleEmailChange
} from '../../modules/signup'

/* 
  function to check if button should be disabled. 
  If both email and pw are valid, then disabled
  should be false so that button is active.
*/
const isDisabled = (bool1, bool2) => bool1 && bool2 ? false : true

const Home = props => (
  <div className="container">
    <h2>Sign Up</h2>
    <form className="form-container">
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input
          type="input"
          name="username"
          placeholder="Username"
          onChange={props.handleChange}
          autoFocus
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={props.handleEmailChange}
          required
        />
      </div>

      {/* while user is typing and email isn't valid, let them know that address invalid */}
      {props.email.length && !props.isValidEmail ? (
        <p className="modal">You must enter a vaild email address!</p>
      ) : null}

      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={props.handlePWChange}
          required
        />
      </div>

      {/* If there are pw errors, render the modal component with the errors */}
      {props.errors.length ? <Modal errors={props.errors} /> : null}

      {/* If both email and passwords are valid, let user know that everything is correct */}
      {props.isValidEmail && props.isValidPassword ? (
        <p className="valid">All fields are correct!</p>
      ) : null}
      <button
        type="sumbit"
        onClick={() => props.changePage()}
        disabled={isDisabled(props.isValidEmail, props.isValidPassword)}>
        Sign Up!
      </button>
    </form>
  </div>
)

const mapStateToProps = ({ signup }) => ({
  username: signup.username,
  email: signup.email,
  password: signup.password,
  isValidEmail: signup.isValidEmail,
  isValidPassword: signup.isValidPassword,
  errors: signup.errors
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      handleChange,
      handlePWChange,
      handleEmailChange,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
