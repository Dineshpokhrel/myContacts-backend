const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: "User",
    },
    name:{
        type: String,
        require: [true, "Must add contact name"],
    },
    email:{
        type: String,
        require: [true, "Must add contact email address"],
    },
    phone:{
        type: String,
        require: [true, "Must add contact phone number"],
    },
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("Contact", contactSchema);