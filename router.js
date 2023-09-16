const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('serever uo and running');
})

module.exports = router;