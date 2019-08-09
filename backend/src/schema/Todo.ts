import { Schema, model, Document } from 'mongoose'

interface TodoInterface extends Document {
    description: string
    done: boolean
}

const TodoSchema = new Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: {type: Date, default: Date.now }
}) 

export default model<TodoInterface>('Todo', TodoSchema)