// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title><%=locals.title ? title:'login-system'%></title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
//     <link rel="stylesheet" href="/static/style.css">
// </head>
// <body>

// <%-include('header')-%>

// <div class="text-center center-div" id="login">
//     <div class="container w-25 border py-5">
//         <div class="title">
//             <h2 class="font-weight-bold">Login System</h2>
//             <span>Log in for the existing user</span>
//             <% if(locals.logout){ %>
//                 <div class="alert alert-success text-center">
//                     <%= logout %>
//                 </div>
//             <% } %>
//             <% if(locals.login){ %>
//             <div class="alert alert-danger text-center">
//                 <%= login %>
//             </div>
//         <% } %>
//         </div>
//         <form action="/route/login" method="POST" class="pt-3">
//             <div class="form-group">
//                 <input type="email" class="form-control" placeholder="email" name="email">
//                 <small class="form-text text-muted text-left ">Register email address</small>
//             </div>
//             <div class="form-group">
//                 <input type="password" class="form-control" name="password" placeholder="password">
//             </div>
//             <button type="submit" class="btn btn-success rounded-pi mt-2">Submit</button>
//         </form>
//     </div>
// </div>

// <%-include('footer')-%>

// <%-include('header')-%>


// <div class="text-center center-div mt-5" id="login">
//     <div class="container w-35 border py-5 mt-5">
//         <h3>Welcome to Express Dashboard</h3>
//         <h5><%=locals.user ? user:"user" %> </h5>
//         <a href="/route/logout">logout</a>
//     </div>

// </div>


// <%-include('footer')-%>

// </body>
// </html>

// const express = require("express");
// const app = express();
// const path = require('path');
// const bodyparser = require('body-parser');
// const session = require('express-session');
// const router = require('./router.js');

// const port = 3000;

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));

// app.set('view engine', 'ejs');

// // Load static files
// app.use('/static', express.static(path.join(__dirname, 'public')));

// // Use session middleware
// app.use(session({
//     secret: 'keyboard cat', // Replace with a strong secret key
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false } // Set `secure: true` if using HTTPS
// }));

// // Use the router
// app.use('/route', router);

// // Home route
// app.get('/', (req, res) => {
//     if (req.session.user) { // Check if the user is logged in
//         res.render('dashboard', { user: req.session.user });
//     } else {
//         res.render('base', { title: 'login_form', login: '' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Listening to the server at http://localhost:${port}`);
// });

// const express = require('express');
// const router = express.Router();

// // Static credentials for login
// const credential = {
//     email: 'hari@gmail.com',
//     password: '1234'
// };

// // Login route
// router.post('/login', (req, res) => {
//     if (req.body.email === credential.email && req.body.password === credential.password) {
//         req.session.user = req.body.email; // Save the email in the session
//         res.redirect('/route/dashboard');  // Redirect to dashboard
//     } else {
//         res.render('base', { title: 'login_form', login: "Invalid email-id/password" });
//     }
// });

// // Route for the dashboard
// router.get('/dashboard', (req, res) => {
//     if (req.session.user) { // Check if the user is logged in
//         res.render('dashboard', { user: req.session.user });
//     } else {
//         res.send('Unauthorized user, please log in first.');
//     }
// });

// // Logout route
// router.get('/logout', (req, res) => {
//     req.session.destroy(function (err) { // Destroy the session
//         if (err) {
//             console.log(err);
//             res.send("Error logging out");
//         } else {
//             res.render('base', { title: 'Express', logout: "Logged out successfully...!" });
//         }
//     });
// });

// module.exports = router;

