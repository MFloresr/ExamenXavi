var Producte = require("../../models/Producte");
var router = require("express").Router();
router.get("/", function(req, res, next) {
    Producte.find()
            .sort('-date')
            .exec(function(err, productes) {
        if (err) {
            return next(err);
        }
        res.json(productes);
    });
    
});

router.post("/", function (req,res,next) {
    var producte = new Producte({
        Codi : req.body.Codi,
        Nom : req.body.Nom,
        Seccio : req.body.Seccio,
        Preu : req.body.Preu
    })
    producte.save(function(err, producte) {
        if (err) { return next(err) }
        res.status(201).json(producte);
    });
});

module.exports = router;
