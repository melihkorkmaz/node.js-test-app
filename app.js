const express = require('express');
const exphbs  = require('express-handlebars');


const app = express();



//Handlebars Middleware;
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//including css files.
// app.use('/static', express.static('public'))
// app.use(express.static('public'));


// app.use(express.static((__dirname, '/public')));
// app.use('/public', express.static('public'));

// app.use(express.static(__dirname , "/public")); 
// app.use(express.static(__dirname + '/public'));
/* const path = require('path'); 
app.use(express.static(path.join(__dirname + '/public'))); */
// app.use(express.static("."));

//main route u atama;
app.get('/', (req, res) => {
  res.render('index');
});

//about page root;
app.get('/about', (req, res) => {
  res.render('about');
});






//port işlemleri;
const port = 5000;

app.listen(port, function () {
  console.log('Server stared on port ' + port)
});