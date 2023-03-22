const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    money:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    trxntype:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
    },
    date:{
        type: String,
        default: Date
    },
  });
  module.exports = mongoose.model('notes',NotesSchema);