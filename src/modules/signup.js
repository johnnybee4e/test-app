export const CHANGE_INPUT_FIELD = 'signup/CHANGE_INPUT_FIELD'
export const VALIDATE_EMAIL = 'signup/VALIDATE_EMAIL'
export const VALIDATE_PASSWORD = 'signup/VALIDATE_PASSWORD'
export const SUBMIT_REQUEST = 'signup/SUBMIT_REQUEST'

const initialState = {
  username: '',
  email: '',
  password: '',
  isValidEmail: false,
  isVaildPassword: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_FIELD:
    
      return {
        ...state,
        [action.name]: action.value
      }

    default:
      return state
  }
}

export const handleChange = (evt) => {
  const { name, value } = evt.target
  console.log("name:", name, "value:", value)
  return dispatch => {
    dispatch({
      type: CHANGE_INPUT_FIELD,
      name,
      value
    })
  }
}