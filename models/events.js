let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let EventSchema = new Schema({
    writeup: { type: String },
    location: { type: String },
    date: { type: String },
    time: { type: String },
    postImage: { type: String },
    publicid: { type: String },
    featured: { type: Boolean, default: false },
    nonfeatured: { type: Boolean, default: false },
    month: { type: String },
    day: { type: String },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Event", EventSchema);