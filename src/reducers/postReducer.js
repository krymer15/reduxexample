// evaluate any actions committed like fetching or creating posts

import { FETCH_POSTS, NEW_POST } from './../actions/types';

const initialState = {
    items: [], // posts coming in from action
    item: {} // single post we add
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}