let express = require(`express`);
let mongoose = require(`mongoose`);
let nunjucks = require('nunjucks');

mongoose.connect(`mongodb://localhost/pokedex`);

let app = express();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

console.log(`Pokedex lancé sur le port 3000`);

app.listen(3000);