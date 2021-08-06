import * as SearchUtil from '../util/search_api_util'

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS"
export const CLEAR_SEARCH = "CLEAR_SEARCH"

export const receiveSearchResults = results => {
    debugger
    return {
        type: RECEIVE_SEARCH_RESULTS,
        results
    }
}

export const removeSearchResults = () => {
    debugger
    return {
        type: CLEAR_SEARCH
    }
}

export const fetchSearchResults = entity => dispatch => {
    debugger
    return SearchUtil.fetchSearch(entity)
    .then((results) => dispatch(receiveSearchResults(results)))
}
