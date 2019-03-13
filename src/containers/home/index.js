import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Modal from '../modal'
import { handleChange, handlePWChange } from '../../modules/signup'

const Home = props => (
  <div className="container">
    <h1>Sign Up</h1>
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
          onChange={props.handleChange}
          required
        />
      </div>
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
        {/* If there are errors, render the modal component with the errors */}
        {props.errors.length ? <Modal errors={props.errors} /> : null}

      <button type="sumbit" onClick={() => props.changePage()} disabled={!props.isVaildPassword}>
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
  isVaildPassword: signup.isVaildPassword,
  errors: signup.errors
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      handleChange,
      handlePWChange,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
