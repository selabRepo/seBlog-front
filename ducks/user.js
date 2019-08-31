import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'
import { fail } from 'assert';

const initialState = {
    userId:null,
    jwtToken:null,
    isLogin: false,
    isSuccess : false,
}

const USER_SIGNIN = 'user/USER_SIGNIN'
const USER_SIGNUP = 'user/USER_SIGNUP'

export const userSignin = createAction(USER_SIGNIN, params => {
  return axios.post("/api/login", params)
})

export const userSignup = createAction(USER_SIGNUP, params => {
  return axios.post("/api/signup", params)
})

export default handleActions(
  {
    ...pender({
      type: USER_SIGNIN,
      onSuccess: (state, action) => {
        return {
          ...state,
          ...action.payload.data,
          isSuccess : true,
          isLogin: true,
        }
      },
      onFailure : (state, action) => {
        return {
          ...state,
          isSuccess : false,
          isLogin:false,
        }
      }
    }),
  },
  initialState,
)
