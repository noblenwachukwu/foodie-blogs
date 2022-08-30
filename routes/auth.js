const express = require('express')
const passport = require('passport')
const router = express.Router()



// @desc  auth with google
// @route  GET/auth/google

router.get('/google', passport.authenticate
('google',{scope: ['profile'] }))

// @desc  Google auth callback
// @route  GET/auth/google/callback
router.get('/google/callback', passport.
authenticate('google', {failiureRedirect: '/'}),
(req, res) =>{
    res.redirect('/dashboard')
})

// @desc Logout User
// @route /auth/logout

router.get('/logout', (req, res, next)=>{
    req.logout(function(err){
        if(err){ return next (err)}
        res.redirect('/')
    })
})


module.exports = router