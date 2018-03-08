import axios from 'axios'
const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
    const response = await axios.post(url, {content, votes:0 })
    return response.data
}

const voteAnec = async (content) => {

    const newAnec = {
        content: content.content,
        id: content.id,
        votes: content.votes+1
    }
    
    const response = await axios.put(`${url}/${content.id}`, newAnec)
 
    
    
    return response.data
}

export default { getAll, createNew, voteAnec }