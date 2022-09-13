const router = require('express').Router();

const {Resume} = require('../../models')

router.post('/',  async (req, res) => {
    try{
      const newResume= await Resume.create({
        ...req.body,
        user_id: req.body.user_id,
      });
  
      res.status(200).json(new Resume);
    } catch (err) {
      res.status(400).json(err);
    }
  });

 

module.exports = router;