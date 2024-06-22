const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    add: {
        type: String
    },
    work: {
        type: String,
        enum: ['chutiya', 'Gandu', 'Namard'],
        required: true
    },
    Mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
