module.exports=(sequelize, Sequelize)=>{
    const Student = sequelize.define('student',{

        firstName:{
            type:Sequelize.STRING
        }, 
        lastName:{
            type:Sequelize.STRING
        }, 
        birthDate:{
            type:Sequelize.DATEONLY
        }, 
    });

    
    return Student;

};