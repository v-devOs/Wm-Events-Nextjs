import { ICode } from '@/interfaces'
import mongoose, { Schema, model, Model } from 'mongoose'


const codeSchema = new Schema({
  code:       { type: String, require: true },
  name:       { type: String },
  attendace:  { type: Boolean, require: true, default: false },
  isRegister: { type: Boolean, require: true, default: false }
})



const Code: Model<ICode> = mongoose.models.Code || model('Code', codeSchema)

export default Code