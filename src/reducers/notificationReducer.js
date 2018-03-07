const messagesAtStart = [
    ''
  ]
  
  const getId = () => (100000*Math.random()).toFixed(0)
  
  const asObject = (message) => {
    return {
      message
    }
  }
  
  const initialState = messagesAtStart
  
  const notificationReducer = (store = initialState, action) => {
    console.log(store, action);
    if (action.type==='CREATE_NOTI') {
        return [...store,  action.content]
      
    return store
  }
  if (action.type ==='EMPTY_NOTI'){
      return initialState
  }
  return store
}

 export const voteNoti = (content) => {
    return{
        type: 'CREATE_NOTI',
         content
    }
 }

 export const timesUp = (content) => {
     return{
         type: 'EMPTY_NOTI'
     }
 }


  
  
  export default notificationReducer