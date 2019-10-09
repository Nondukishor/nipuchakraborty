const app=require('express');
router=app.Router();

router.get('/',function(req, res, next) {
    res.render('layout/login')
});

module.exports = router;