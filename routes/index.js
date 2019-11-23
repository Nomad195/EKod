const express = require('express');
const router = express.Router();
const path = require('path');
let passport = require("passport");
const mongoose = require("mongoose");
const multer = require("multer");
const methodOverride = require("method-override");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");


//link to models
const User = require("../models/users");
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
    let featured = await Event.find({ featured: true }).exec()
    let nonfeatured = await Event.find({ nonfeatured: true }).exec()

    res.render('index', { featured, nonfeatured });
});

router.get('/register', (req, res, next) => {
    res.render('register')
})

router.get('/login/users', (req, res, next) => {

    let loginError = req.flash('loginError')
    let wrongPassword = req.flash('wrongPassword');

    res.render('login', { role: "users", loginError, wrongPassword })
})

router.get('/login/admin', (req, res, next) => {

    let loginError = req.flash('loginError')
    let wrongPassword = req.flash('wrongPassword');

    res.render('login', { role: 'admin', loginError, wrongPassword })
})

//post register route 

router.post('/register', passport.authenticate('local.registerUsers', {
    successRedirect: '/dashboard',
    failureRedirect: '/register',
    failureFlash: true
}))


router.post('/login/users', passport.authenticate('local.loginUsers', {
    successRedirect: '/dashboard',
    failureRedirect: '/login/users',
    failureFlash: true
}))

router.post('/login/admin', passport.authenticate('local.loginAdmin', {
    successRedirect: '/admin',
    failureRedirect: '/login/users',
    failureFlash: true
}))

router.get("/logout", function (req, res) {
    req.logout()
    res.redirect('/login/users')
});


// AUTH MIDDLEWARE, HELPER FUNCTIONS
// -----

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

function adminLoggedIn(req, res, next) {
    if (req.isAuthenticated() && req.user.role === "admin") {
        return next()
    }
    res.redirect('/login')
}

router.get('/dashboard', isLoggedIn, async (req, res, next) => {
    let featured = await Event.find({ featured: true }).exec()
    let nonfeatured = await Event.find({ nonfeatured: true }).exec()

    res.render('dashboard', { featured, nonfeatured })
})

router.get('/addevent', isLoggedIn, (req, res, next) => {
    let success = req.flash("success");
    console.log(success)
    res.render('addevent', { success })
})

//post event
router.post('/addevent', isLoggedIn, upload.single('postImage'), (req, res, next) => {
    let newEvent = new Event({
        _id: new mongoose.Types.ObjectId(),
        writeup: req.body.writeup,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        postImage: req.file.secure_url,
        publicid: req.file.public_id,
        month: new Date().getMonth(),
        day: new Date().getDate()
    })
    newEvent.save()
        .then(result => {
            req.flash("success", "Event uploaded successfully");
            res.redirect("/addevent");
        })
        .catch(err => {
            console.log('error during upload')
        })
})

router.get('/about_us', (req, res, next) => {
    res.render('About_us')
})

router.get('/ticketting', (req, res, next) => {
    res.render('ticketting')
})

router.get('/recommendation', (req, res, next) => {
    res.render('recommendation')
})

router.get('/admin', adminLoggedIn, (req, res, next) => {
    Event.find().exec()
        .then((result) => {
            res.render('admindashboard', { result })
        })
})

router.post('/updatefeatured', adminLoggedIn, (req, res, next) => {
    Event.findOne({ _id: req.body.id }).exec()
        .then((result) => {
            if (result.featured === false) {
                Event.findOneAndUpdate({ _id: req.body.id }, { featured: true }, { upsert: true })
                    .then((doc) => {
                        console.log(doc)
                        res.redirect('/admin')
                    })
            } else {
                Event.findOneAndUpdate({ _id: req.body.id }, { featured: false }, { upsert: true })
                    .then((doc) => {
                        console.log(doc)
                        res.redirect('/admin')
                    })
            }
        })
})

router.post('/updatenonfeatured', adminLoggedIn, (req, res, next) => {
    Event.findOne({ _id: req.body.id }).exec()
        .then((result) => {
            if (result.nonfeatured === false) {
                Event.findOneAndUpdate({ _id: req.body.id }, { nonfeatured: true }, { upsert: true })
                    .then((doc) => {
                        console.log(doc)
                        res.redirect('/admin')
                    })
            } else {
                Event.findOneAndUpdate({ _id: req.body.id }, { nonfeatured: false }, { upsert: true })
                    .then((doc) => {
                        console.log(doc)
                        res.redirect('/admin')
                    })
            }
        })
})

//teacher deletes a particular lecture 
router.delete('/deleteEvent', adminLoggedIn, (req, res, next) => {
    cloudinary.v2.uploader.destroy(req.body.publicid, function (result) {
        Event.remove({ _id: req.body.id })
            .then((doc) => {
                console.log(doc)
                res.redirect('/admin')
            })
    })
})

router.get('/event/:month/:day', async (req, res, next) => {
    let month = req.params.month;
    let day = req.params.day
    let featured = await Event.find({ month: month, day: day, featured: true }).exec()
    let nonfeatured = await Event.find({ month: month, day: day, nonfeatured: true }).exec()

    res.render('events', { featured, nonfeatured })
})



module.exports = router;
