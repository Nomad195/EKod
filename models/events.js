let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let EventSchema = new Schema({
    postImage: { type: String },
    publicid: { type: String },
    month: { type: String },
    day: { type: String },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Event", EventSchema);