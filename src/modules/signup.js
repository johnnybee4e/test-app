import owasp from 'owasp-password-strength-test'

export const CHANGE_INPUT_FIELD = 'signup/CHANGE_INPUT_FIELD'
export const VALIDATE_PASSWORD = 'signup/VALIDATE_PASSWORD'
export const PASSWORD_ERROR = 'signup/PASSWORD_ERROR'
export const SUBMIT_REQUEST = 'signup/SUBMIT_REQUEST'

const initialState = {
  username: '',
  email: '',
  password: '',
  isVaildPassword: false,
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_FIELD:
      return {
        ...state,
        [action.name]: action.value
      }

    case VALIDATE_PASSWORD:
      console.log('hittinv validate password reducer case')
      return {
        ...state,
        isVaildPassword: true,
        errors: []
      }

    case PASSWORD_ERROR:
      console.log('hitting errors reducer case')
      return {
        ...state,
        isVaildPassword: false,
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

export const handlePWChange = evt => {
  const { name, value } = evt.target
  const pwResult = validatePassword(value)
 
  return dispatch => {
    dispatch({
      type: CHANGE_INPUT_FIELD,
      name,
      value
    })
    
    // check if there are any errors. if not, toggle isValidPassword to true
    if(!pwResult.length) dispatch({type: VALIDATE_PASSWORD})
    // otherwise, add the errors to state to be rendered
    else dispatch({
      type: PASSWORD_ERROR,
      errors: pwResult
    })
  }
}
