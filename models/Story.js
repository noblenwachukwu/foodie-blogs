const mongoose = require('mongoose')

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Public',
        enum: ['Public', 'Private']
    },
    meal: {
        type: String,
        default: 'Dinner',
        enum: ['Breakfast', 'Lunch', 'Dinner']
    },
   user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    image: {
        type: String
       
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Story' , StorySchema)