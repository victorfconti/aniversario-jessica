module.exports = ()=>{
    this.get = (req, res, next)=>{
        res.render('index');
    };
    this.begin = (req, res, next) => {
        const session = req.session;
        res.redirect('/quiz');
    };
    return this;
};