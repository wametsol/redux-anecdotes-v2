const filterReducer = (store = '', action) => {
    if(action.type ==='SET_FILTER'){
        return [...store,  action.filter]
    }
    return store
}

export const filterChange = (filter) => {
    return {
        type: 'SET_FILTER',
        filter
    }
}

export default filterReducer