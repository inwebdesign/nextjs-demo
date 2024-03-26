const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  userId: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  }
}, {timestamps: true})
const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  }
}, {timestamps: true})

export const Post = mongoose.models?.Post || new mongoose.model('Post', postsSchema)
export const User = mongoose.models?.User || new mongoose.model('User', usersSchema)