const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require("mongoose");
const multer = require("multer");
const methodOverride = require("method-override");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

//MODELS 
const Event = require("../models/events");

// HANDLE IMAGES
// -----
// CLOUDINARY STORAGE
//cloudinary configuration
cloudinary.config({
    cloud_name: "eko-diary",
    api_key: "993884978755989",
    api_secret: "ZRcMVntudbvx-K2gzTxdMoL4VJs"
});

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "ekoo",
});


// FILE CHECK
function checkFileType(type) {
    return function (req, file, cb) {
        // Allowed ext
        let filetypes;
        if (type == "pdf") {
            filetypes = /pdf/;
        } else if (type == "images") {
            filetypes = /jpeg|jpg|png|gif/;
        }

        // Get ext
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        // Check mime
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error(`Error Occured: Upload ${type.toUpperCase()} Only!`));
        }
    };
}
// Multer execute
const upload = multer({ storage: storage, fileFilter: checkFileType("images") });


/* GET home page. */
router.get('/', async function (req, res, next) {
    let newFeatured = await Event.find().exec()

    res.render('index', { newFeatured })
});

router.get('/event/:month/:day', async function (req, res, next) {
    let month = req.params.month;
    let day = req.params.day
    let featured = await Event.find({ month: month, day: day }).exec()
    console.log(featured)
    
    res.render('events', { featured, month, day });
});

router.post('/event/:month/:day', upload.single('postImage'), (req, res, next) => {
    let month = req.params.month;
    let day = req.params.day;

    let newEvent = new Event({
        _id: new mongoose.Types.ObjectId(),
        postImage: req.file.secure_url,
        publicid: req.file.public_id,
        email: req.body.email,
        month: month,
        day: day
    })
    newEvent.save()
        .then(result => {
            console.log(result)
            req.flash("success", "Event uploaded successfully");
            res.redirect(`/event/${month}/${day}`);
        })
        .catch(err => {
            console.log('error during upload')
        })
})

//teacher deletes a particular lecture 
router.delete('/deleteEvent/:month/:day', (req, res, next) => {
     let month = req.params.month;
    let day = req.params.day;
    cloudinary.v2.uploader.destroy(req.body.publicid, function (result) {
        Event.remove({ _id: req.body.id })
            .then((doc) => {
                console.log(doc)
                res.redirect(`/event/${month}/${day}`)
            })
    })
})


module.exports = router;
