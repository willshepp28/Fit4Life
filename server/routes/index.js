/*
|--------------------------------------------------------------------------
|  Dependencies
|--------------------------------------------------------------------------
*/
const router = require('express').Router(),
    crypto = require('crypto'),
    knex = require('../db/knex');




/*
|--------------------------------------------------------------------------
|  Home Page - the home page where you can see other users posts
|--------------------------------------------------------------------------
*/

router
    .route('/')
    .get((request, response) => {
       
        var post = knex.select()
            .from('post')
            .then((post) => { response.render('home', { post: post })})
            .catch((error) => { console.log(error + " this is the freaking error")})
    });




module.exports = router;