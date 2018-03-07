const filterReducer = (store = '', action) => {
    if(action.type ==='SET_FILTER'){
        return [ action.filter]
    }
    return store
}

export const filterChange = (filter) => {
    return {
        type: 'SET_FILTER',
        filter
    }
    return filter
}

export default filterReducer