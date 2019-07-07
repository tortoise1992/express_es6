export default router=>{
    router.get('/user/list', function(req, res, next) {
        res.json({

        });
    });
    router.get('/user/list2', function(req, res, next) {
        res.json({
            name:'test'
        });
    });
}