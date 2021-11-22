const {Router} = require('express');
const router = Router();
const groupController = require('../controllers/group.controller');

router.get('/', async (req, res)=>{

    const groups = await groupController.findAll()
   

    res.render('./groups/groups',{
        title: 'Группы',
        isGroup: true,
        groups

    })
});

router.get('/add', async (req, res)=>{

    res.render('./groups/addGroup',{
        title: 'Добавить группу',
        isGroup: true

    })
});
router.post('/add', async (req, res)=>{

    groupController.createGroup(req.body);    


    res.redirect('/groups/');
});

router.get('/delete/:id', async (req, res)=>{

    const id = req.params.id;
    groupController.deleteGroupByID(id);

    res.redirect('/groups/');
})

router.get('/update/:id', async (req, res)=>{
    const id = req.params.id;
    const group = await groupController.findGroupByID(id);
    

    res.render('./groups/updateGroup',{
        title: 'Изменить группу',
        isGroup: true,
        group
    })
   
})

router.post('/update/', async (req, res)=>{
    
    await groupController.updateGroup(req.body); 
    res.redirect('/groups/');
   
})



module.exports = router;