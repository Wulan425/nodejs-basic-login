module.exports ={
    home(req,res){
        res.render("home",{
            url: 'http://localhost:7070/',
            userName: req.session.username,
        });
    }
}