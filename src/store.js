import { createStore, combineReducers, applyMiddleware } from 'redux'
import anecdoteReducer, {anecInitialization} from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecService from './services/anecdotes'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notifications: notificationReducer,
    filter: filterReducer
})
//console.log(anecdoteReducer);
//console.log(notificationReducer);


const store = createStore(
    reducer,
applyMiddleware(thunk))


//console.log(store.getState());


export default store