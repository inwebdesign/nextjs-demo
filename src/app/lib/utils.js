const mongoose = require('mongoose')

let db = {}

export const connectedToDb = async () => {
  try {
    if(db.isConnected) {
      console.log('Use existing connection!')
      return
    }
    const connection = await mongoose.connect('mongodb+srv://nesaeco:WJrXlGn8OjItQotq@cluster0.xc9wkfb.mongodb.net/menr')
    db.isConnected = connection.connections[0].readyState
    console.log('Connected to db...')
  } catch (error) {
    throw new Error(error)
  }
}