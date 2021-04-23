const mongoose = require('mongoose');

const interface = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    searchQuery:{
        type: String,
    },
    notesList:[{
        type: String
    }],
    longitude:{
        type: String,
    },
    latitude:{
        type: String,
    },
    videoID:{
        type: String,
    },
    news:{
        type: Boolean,
        default: true
    },
    timing:{
        type: Boolean,
        default: true
    },
    forecast:{
        type: Boolean,
        default: true
    },
    quotes:{
        type: Boolean,
        default: true
    },
    note:{
        type: Boolean,
        default: true
    },
    video:{
        type: Boolean,
        default: true
    },

})

module.exports = mongoose.model("interface", interface);