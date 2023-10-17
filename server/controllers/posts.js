import PostMessage from '../models/postMessage.js'

//controller is to apply the logic of the req,res

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    
    res.status(200).json(postMessages)
  } catch(error) {
    res.status(404).json({message:error.message})
  }
}

export const createPost = async (req,res) => {
  res.send('Post Creation')
}