var db = require("../db");
var Producte = db.model('Producte', {
            Codi: {
                type: Number,
                required: true
            },
            Nom: {
                type: String,
                required: true
            },
            Seccio: {
                type: String,
                required: true,
            },
            Preu: {
                type: String,
                required: true,
            }
    });

module.exports = Producte;

