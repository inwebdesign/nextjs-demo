import mongoose from "mongoose";

let db = {}

export const connectedToDb = async () => {
  try {
    if(db.isConnected) {
      console.log('Use existing connection!')
      return
    }
    const connection = await mongoose.connect(process.env.MONGO_DB)
    db.isConnected = connection.connections[0].readyState
    console.log('Connected to db...')
  } catch (error) {
    throw new Error(error)
  }
}