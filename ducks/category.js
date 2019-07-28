import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'

const SET_CATGORIES = 'category/SET_CETAGORIES'
const getCategories = () => {
  return axios.get('/api/categories')
}

const initialState = {
  category: [
    {
      categoryName: null,
      id: 0,
      createdDate: null,
      updatedDate: null,
      groupNumber: 0,
      depth: 0,
      groupOrder: 0,
      createdBy: null,
    },
  ],
}

export const setCategories = createAction(SET_CATGORIES, getCategories)

export default handleActions(
  {
    ...pender({
      type: SET_CATGORIES,
      onSuccess: (state, action) => {
        const category = action.payload.data
        return {
          ...state,
          ...category,
        }
      },
    }),
  },
  initialState,
)
