const Sequelize = require('sequelize');

const sequelize = new Sequelize({

        dialect:'sqlite',
        storage: 'data/database.sqlite'
});

const db ={};

db.Sequelize =Sequelize;
db.sequelize = sequelize;

db.groups = require('./group.model.js')(sequelize,Sequelize);
db.students = require('./student.model.js')(sequelize,Sequelize);

db.groups.hasMany(db.students,{as: 'students'})
db.students.belongsTo(db.groups, {    
    as: "group"
});


module.exports = db;