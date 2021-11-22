const {Router} = require('express');
const router = Router();

const groupController = require('../controllers/group.controller');
const studentsController = require('../controllers/student.controller');

//groups
router.get('/groups/', async (req, res)=>{

    const groups = await groupController.findAll()
   
            res.send(groups);
     
});

router.get('/groups/:id', async (req, res)=>{

    const id = req.params.id;
    const group = await groupController.findGroupByID(id);
   
            res.send(group);
     
});


router.post('/groups/', async (req, res)=>{
    
    if(!Object.keys(req.body).length)
    {
        res.status(400).send({
            message: "Content can not be empty!"
          });
    }
    else
    {
        groupController.createGroup(req.body);    
        res.status(201).send({
            message: "Group created"
          });
    }
    
});

router.delete('/groups/:id', async (req, res)=>{

    const id = req.params.id;
    
    groupController.deleteGroupByID(id);

    res.status(200).send({
        message: "Group deleted"
      });
    
})

router.put('/groups/', async (req, res)=>{
    
    if(!Object.keys(req.body).length)
    {
        res.status(400).send({
            message: "Content can not be empty!"
          });
    }
    else
    {
        await groupController.updateGroup(req.body); 
    
        res.status(200).send({
            message: "Group updated"
          });
    }
   
})


//students
router.get('/students/', async (req, res)=>{

    const students = await studentsController.findAll()
   
            res.send(students);
     
});

router.get('/students/:id', async (req, res)=>{

    const id = req.params.id;
    const student = await studentsController.findStudentByID(id);
   
            res.send(student);
     
});


router.post('/students/', async (req, res)=>{
    console.log()
    if(Object.keys(req.body).length<4)
    {
        res.status(400).send({
            message: "Not enough parameters"
          });
    }
    else
    {
        studentsController.createStudent(req.body);    
        res.status(201).send({
            message: "Students created"
          });
    }
    
});

router.delete('/students/:id', async (req, res)=>{

    const id = req.params.id;
    
    studentsController.deleteStudentByID(id);

    res.status(200).send({
        message: "Student deleted"
      });
    
})

router.put('/students/', async (req, res)=>{
    console.log(Object.keys(req.body).length)
    if(Object.keys(req.body).length<5)
    {
        res.status(400).send({
            message: "Not enough parameters"
          });
    }
    else
    {
        await studentsController.updateStudent(req.body); 
    
        res.status(200).send({
            message: "Student updated"
          });
    }
   
})




module.exports = router;