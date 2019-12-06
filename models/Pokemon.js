let mongoose = require(`mongoosee`);

let pokemonSchema = new mongoose.Schema({
    name: String,
    number: Number,
    description: String,
    image: String,
    types: [{
        type: mongoose.Types.ObjectId,
        ref : `Type`
    }]
});

let Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;