module.exports = ()=>{
    this.get = (req, res, next)=>{
        res.render('index');
    };
    this.begin = (req, res, next) => {
        const session = req.session;
        session.stage = 1;
        res.redirect('/quiz');
    };
    return this;
};