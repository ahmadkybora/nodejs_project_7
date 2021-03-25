const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Shema
const UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type:String
    },
    password: {
        type:String
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    },
});

// Create collection and add schema
mongoose.model('User', UserSchema);
