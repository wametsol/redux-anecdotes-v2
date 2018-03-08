import anecService from '../services/anecdotes'
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
    console.log('luodaan noti',content);
    
    return{
        type: 'CREATE_NOTI',
         content
    }
 }

 export const timesUp = (content) => {
     return{
         
     }
 }

 export const notify = (content, time) => {
     console.log("päästään tänne!", content);
     
     
        
      return async (dispatch) => {  
          dispatch({
            type: 'CREATE_NOTI',
            content
          })
          setTimeout(() => {
              dispatch({
                type: 'EMPTY_NOTI'
              })
              
          }, time*1000)
        
       
        
     }
     
 }


  
  
  export default notificationReducer