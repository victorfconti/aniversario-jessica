module.exports = () => {

    this.get = function(req, res, next){
        switch(req.session.stage){
            case 1:
                pagina1(req, res, next);
                break;
            case 2:
                pagina2(req, res, next);
                break;
            case 3:
                pagina3(req, res, next);
                break;
            case 4:
                pagina4(req, res, next);
                break;
            case 5:
                pagina5(req, res, next);
                break;
            case 'final':
                final(req, res, next);
                break;
            default:
                req.session.stage = 1;
                res.redirect('/quiz');
                break;
        }
    };

    this.post = function(req, res, next){

        switch(req.session.stage){
            case 1:
                pagina1Post(req, res, next);
                break;
            case 2:
                pagina2Post(req, res, next);
                break;
            case 3:
                pagina3Post(req, res, next);
                break;
            case 4:
                pagina4Post(req, res, next);
                break;
            case 5:
                pagina5Post(req, res, next);
                break;
            default:
                res.redirect('/');
        }
        res.redirect('/quiz');
    };

    this.unlock = function(req, res, next){
      res.status(418);
      res.json({'code':'come together right now'});
    };

    function pagina1 (req, res, next) {
        res.render('pagina1');
    }

    function pagina2 (req, res, next) {
        res.render('pagina2');
    }

    function pagina3 (req, res, next){
        res.render('pagina3');
    }

    function pagina4 (req, res, next){
        res.render('pagina4');
    }

    function pagina5 (req, res, next){
        res.render('pagina5');
    }

    function final (req, res, next){
        res.render('final');
    }

    function pagina1Post(req, res, next) {
        req.session.stage = 2;
    }

    function pagina2Post(req, res, next) {
        req.session.stage = 3;
    }

    function pagina3Post (req, res, next){
        req.session.stage = 4;
    }

    function pagina4Post (req, res, next){
        req.session.stage = 5;
    }

    function pagina5Post (req, res, next){
        req.session.stage = 'final';
    }

    return this;
};
