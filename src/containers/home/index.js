import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  CHANGE_INPUT_FIELD,
  SUBMIT_REQUEST,
  handleChange
} from '../../modules/signup'

const Home = props => (
  <div>
    <h1>Sign Up</h1>

    <form>
      <input
        type="input"
        name="username"
        placeholder="Username"
        onChange={props.handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={props.handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={props.handleChange}
      />
      <button
        type="submit"
        disabled={!props.isValidEmail && !props.isVaildPassword}>
        Sign Up!
      </button>
    </form>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
    {console.log('state username:', props.username)}
    {console.log('state email:', props.email)}
    {console.log('state password:', props.password)}
  </div>
)

const mapStateToProps = ({ signup }) => ({
  username: signup.username,
  email: signup.email,
  password: signup.password,
  isValidEmail: signup.isValidEmail,
  isVaildPassword: signup.isVaildPassword
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      CHANGE_INPUT_FIELD,
      SUBMIT_REQUEST,
      handleChange,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
