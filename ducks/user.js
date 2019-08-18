import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'

const initialState = {
    userId:null,
    jwtToken:null,
    isLogin: false
}

const USER_SIGNUP = 'user/USER_SIGNUP'

export const userSignup = createAction(USER_SIGNUP, params => {
  return axios.post("/api/login", params)
})

export default handleActions(
  {
    ...pender({
      type: USER_SIGNUP,
      onSuccess: (state, action) => {
        return {
          ...state,
          ...action.payload.data,
          isLogin: true
        }
      },
    }),
  },
  initialState,
)
