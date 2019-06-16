const ADD_BLOG_TEXT = 'blog/ADD_BLOG_TEXT'
const ADD_BLOG_CATEGORY ='blog/ADD_BLOG_CATEGORY'
const ADD_BLOG_TITLE = 'blog/ADD_BLOG_TITLE'
const ADD_BLOG_TITLE_AND_TEXT = 'blog/ADD_BLOG_TITLE_AND_TEXT'

const initialState = {
    category : null,
    text: null,
    date: null,
    title: null,
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_BLOG_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_BLOG_CATEGORY:
            return {
                ...state,
                category: action.category
            }
        case ADD_BLOG_TITLE: {
            return {
                ...state,
                title: action.title
            }
        }
        case ADD_BLOG_TITLE_AND_TEXT: {
            return {
                ...state,
                title: state.title,
                text: state.text,
            }
        }
        default:
            return state
    }
}

export function addBlogCategory(category) {
    return {
        category,
        type: ADD_BLOG_CATEGORY,
    }
}

export function addBlogText(text) {
    return {
        text,
        type: ADD_BLOG_TEXT,
    }
}

export function addBlogTitle(title) {
    return {
        title,
        type: ADD_BLOG_TITLE,
    }
}

export function addBlogTitleAndText(title, text) {
    return {
        title,
        text,
        type: ADD_BLOG_TITLE,
    }
}

