const SET_CATGORIES = 'category/SET_CETAGORIES'

const initialState = {
    category: null,
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_CATGORIES:
            return {
                category: action.category
            }
        default:
            return state
    }
}

export const setCategories = (category) => {
    return {
        category,
        type: SET_CATGORIES
    }
}