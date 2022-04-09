import mongoose from 'mongoose'

const Schema = mongoose.Schema

const puppySchema = new Schema({
  name: {type: String, required: true},   
  joke: {type: String, default: 'Mixed'},
  rating: {type: Number, default: 0},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  photo: {type: String}
}, {
  timestamps: true
})

const Puppy = mongoose.model('Puppy', puppySchema)

export {Puppy}