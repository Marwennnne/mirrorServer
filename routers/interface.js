const router = require('express').Router();
const interface = require('../models/Interface');
const io = require('../socket');

router.post('/interface/:id', async (req, res) => {
    try{
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

router.get('/interface/:id', async (req, res) => {
    try{

        interface.findOne({id: req.params.id}).then((document) => {
            return res.status(200).json(document);
        });

    }catch(err){
        return res.status(500).json({
            error: err.message
        });
    }
})


module.exports = router;