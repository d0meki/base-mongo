import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});


export const TodoModel = mongoose.model('Todo', todoSchema)