import owasp from 'owasp-password-strength-test'

export const CHANGE_INPUT_FIELD = 'signup/CHANGE_INPUT_FIELD'
export const VALIDATE_PASSWORD = 'signup/VALIDATE_PASSWORD'
export const VALIDATE_EMAIL = 'signup/VALIDATE_EMAIL'
export const PASSWORD_ERROR = 'signup/PASSWORD_ERROR'
export const SUBMIT_REQUEST = 'signup/SUBMIT_REQUEST'

const initialState = {
  username: '',
  email: '',
  password: '',
  isValidPassword: false,
  isValidEmail: false,
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_FIELD:
      return {
        ...state,
        [action.name]: action.value
      }

    case VALIDATE_EMAIL:
      return {
        ...state,
        isValidEmail: action.isValidEmail
      }

    case VALIDATE_PASSWORD:
      return {
        ...state,
        isValidPassword: true,
        errors: []
      }

    case PASSWORD_ERROR:
      return {
        ...state,
        isValidPassword: false,
        errors: action.errors
      }

    default:
      return state
  }
}

const validatePassword = password => {
  let result = owasp.test(password)
  return result.errors
}

const validateEmail = mail => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true
  }
  return false
}

export const handleChange = evt => {
  const { name, value } = evt.target
  return dispatch => {
    dispatch({
      type: CHANGE_INPUT_FIELD,
      name,
      value
    })
  }
}

export const handleEmailChange = evt => {
  const { name, value } = evt.target
  const emailResult = validateEmail(value)
  console.log('email result:', emailResult)
  return dispatch => {
    dispatch({
      type: CHANGE_INPUT_FIELD,
      name,
      value
    })
    dispatch({ type: VALIDATE_EMAIL, isValidEmail: emailResult })
  }
}

export const handlePWChange = evt => {
  const { name, value } = evt.target
  const pwResult = validatePassword(value)
  console.log('pw result:', pwResult)

  return dispatch => {
    dispatch({
      type: CHANGE_INPUT_FIELD,
      name,
      value
    })

    // check if there are any errors. if not, toggle isValidPassword to true
    if (!pwResult.length) dispatch({ type: VALIDATE_PASSWORD })
    // otherwise, add the errors to state to be rendered
    else
      dispatch({
        type: PASSWORD_ERROR,
        errors: pwResult
      })
  }
}
