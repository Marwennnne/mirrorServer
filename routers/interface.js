const router = require('express').Router();
const interface = require('../models/Interface');
const io = require('../socket');

router.post('/interface/:id', async (req, res) => {
    try{
        console.log("works")
        console.log(req.body)
        interface.findOneAndUpdate({ id: req.params.id},{$set: req.body }, {new: true})
        .then((data) => {
            console.log(data);
            io.getIO().emit('14767621',data);
            res.status(200).json({ data: data});
        })
    }catch(err){
        res.status(500).json({ error: err.message });
    }
})


module.exports = router;