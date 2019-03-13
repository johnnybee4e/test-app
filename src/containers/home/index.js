import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  handleChange,
  handlePWChange
} from '../../modules/signup'

const Home = props => (
  <div>
    <h1>Sign Up</h1>

    <form>
    <label htmlFor='username'>Username:</label>
      <input
        type="input"
        name="username"
        placeholder="Username"
        onChange={props.handleChange}
        autoFocus
        required
      />
      <label htmlFor='email'>Email Address:</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={props.handleChange}
        required
      />
      <label htmlFor='password'>Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={props.handlePWChange}
        onFocus={() => {
            console.log('lookie here!')
           }
          }
        required
      />
      <button
        type="submit"
        disabled={!props.isVaildPassword}>
        Sign Up!
      </button>
    </form>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
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
      changePage: () => push('/about-us'),
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
