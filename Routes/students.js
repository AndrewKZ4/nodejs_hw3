const {Router} = require('express');
const router = Router();

const studentController = require('../controllers/student.controller');
const groupController = require('../controllers/group.controller');

router.get('/', async (req, res)=>{

    const groups = await groupController.findAll()
    const students = await studentController.findAll()
   

    res.render('./students/students',{
        title: 'Студенты',
        isStudent: true,
        groups,
        students

    })
});

router.post('/', async (req, res)=>{
    let students ={}
    if(req.body.id==0)
    {
        students = await studentController.findAll()
    }
    else
    {
        students  = await studentController.findStudentsByGroupID(req.body.id)
    }
    
    res.json(JSON.stringify(students)  );

   
});

router.get('/add', async (req, res)=>{

    const groups = await groupController.findAll()
    res.render('./students/addStudent',{
        title: 'Добавить студента',
        isGroup: true,
        groups

    })
});
router.post('/add', async (req, res)=>{

   // console.log(req.body);
    studentController.createStudent(req.body);    


    res.redirect('/students/');
});

router.get('/delete/:id', async (req, res)=>{

    const id = req.params.id;
    studentController.deleteStudentByID(id);

    res.redirect('/students/');
})

router.get('/update/:id', async (req, res)=>{
    const id = req.params.id;
    const student = await studentController.findStudentByID(id);
    const groups = await groupController.findAll()

    res.render('./students/updateStudent',{
        title: 'Изменить сутдента',
        isGroup: true,
        groups,
        student
    })
   
})

router.post('/update/', async (req, res)=>{
    
    await studentController.updateStudent(req.body); 
    res.redirect('/students/');
   
})

module.exports = router;