const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    body: {
        type: String,
        require: true
    },
    author: {
        type: Object,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Blog', blogSchema);