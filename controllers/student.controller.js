const db = require("../models");
const Student = db.students;

exports.createStudent = (body) => {
    
   
    Student.create({
        firstName: body.first_name,
        lastName: body.last_name,
        birthDate: body.birthdate,
        groupId: body.group_id
      
    })
    .catch((err) => {
        console.log(">> Error while creating students: ", err);
      });
      
  };


 exports.findAll = () => {

    return Student.findAll({
      include: ["group"],
    });
    
        
  };

  exports.findStudentsByGroupID = (id) => {
    return Student.findAll({where: {groupId: id},include: ["group"]});
  };

  exports.findStudentByID = (id) => {
    return Student.findByPk(id)
  };

  exports.updateStudent = (body) => {
          console.log(body);

          /* first_name: 'Андрей',
          last_name: 'Кожухов',
          birthdate: '2021-10-17',
          group_id: '9' */

    return Student.update({
            id: body.id,
            firstName: body.first_name,
            lastName: body.last_name,
            birthDate: body.birthdate,
            groupId: body.group_id
        }, 
        {where:{
            id: body.id

        }})      
      .catch((err) => {
        console.log(">> Error while updating", err);
      });
  };

  exports.deleteStudentByID = (id) => {
    return Student.destroy({
        where:{id: id}
    })
    
  };

  


