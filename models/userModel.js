const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        type: String,
        require: [true, "Please add the user name"],

    },
    email: {
        type:String,  
        required: [true,"Please provide your email address."], 
        unique: [true,  'This email is already in use.'],
    },
    password: {
        type: String,
        required: [true, "Please add the user password"],
    },
},{
    timestamps: true,
});

module.exports = mongoose.model("User",userSchema);