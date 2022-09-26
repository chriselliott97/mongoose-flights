import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: String,
  aiport: String,
  flightNo: Number,
  departs: Date,

})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}