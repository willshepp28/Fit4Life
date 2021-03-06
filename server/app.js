/*
 |--------------------------------------------------------------------------
 | Require Dependencies
 |--------------------------------------------------------------------------
 */
const express = require('express'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  expressValidator = require('express-validator'),
  cors = require('cors'),
  flash = require('connect-flash'),
  path = require('path'),
  morgan = require('morgan'),
  handlebars = require('express-handlebars'),
  index = require('./routes/index'),
  port = process.env.PORT || 8000;
application = express();



/*
|--------------------------------------------------------------------------
|  Middleware
|--------------------------------------------------------------------------
*/
// Register `hbs.engine` with the Express app.
application.engine('handlebars', handlebars({ defaultLayout: 'main' }));
application.set('view engine', 'handlebars');

// Set Static Files
application.use('/assets', express.static(path.join(__dirname, 'public')));

application.use(morgan('dev'));
// application.use(morgan('combined'))


// parse application/x-www-form-urlencoded
application.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
application.use(bodyParser.json());

application.use(expressValidator());




application.use(session({
  secret: 'somanyparts',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Express will allow requests from port 8080
// 8080 needs access to our json data
application.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}));




// application.use(function (request, response, next) {

//   // if req.session.isAuthenitcated dosnet exist its false
//   if (!request.session.isAuthenticated) {
//     request.session.isAuthenticated = false;

//   }

//   // if user is logged in create request.session.allNotifications array
//   if (request.session.isAuthenticated) {

//     if(!request.session.follow){


//       request.session.follow = [];

//     } 
//   }


//   next();
// });







/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

application.use('/', index);

// Api
// application.use('/api/v1/user', userApi);
// application.use('/api/v1/post', postApi);





/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/
application.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});