var mongoose = require("mongoose");
mongoose.connect("mongodb://mario:123456@ds041851.mongolab.com:41851/mrsito", function() {
    console.log('Connectat a mongodb');
});

module.exports = mongoose;
