const {Router} = require('express');
const router = Router();

const groupController = require('../controllers/group.controller');

router.get('/groups/', async (req, res)=>{

    
})


router.post('/add', async (req, res)=>{

    console.log(req.body);

    res.redirect('/groups/');
})



module.exports = router;