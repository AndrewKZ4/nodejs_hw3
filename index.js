const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const studentsRoutes = require('./routes/students');
const groupsRoutes = require('./routes/groups');
const apiRoutes = require('./routes/api')
const cors = require("cors");
const db = require("./models")

db.sequelize.sync();

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
  };

const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs'

})

app.engine('hbs', hbs.engine);
app.set('view engine','hbs');
app.set('views','views');
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/students', studentsRoutes);
app.use('/groups', groupsRoutes);
app.use('/api', apiRoutes);


const PORT = process.env.PORT|| 3000;

app.listen(PORT, ()=>
{
    console.log(`Server is running on port ${PORT}`);
})