const db = require("../models");
const Group = db.groups;

exports.createGroup = (group) => {
    
    return Group.create({
        groupName: group.group_name,
      
    })
      
  };


 exports.findAll = () => {

    return Group.findAll();
    
        
  };

  exports.findGroupByID = (id) => {
    return Group.findByPk(id).then((groups) => {
      return groups;
    });
  };

  exports.updateGroup = (body) => {
          
    return Group.update({
            id: body.id,
            groupName: body.group_name
        }, 
        {where:{
            id: body.id

        }})      
      .catch((err) => {
        console.log(">> Error while updating", err);
      });
  };

  exports.deleteGroupByID = (id) => {
    return Group.destroy({
        where:{id: id}
    })
    
  };

  


