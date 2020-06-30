const fs = require('fs');


let enCartelera = {
    db: './data/movies.json',
    titulo: "En Cartelera: \n\n",
    leerJSON: function() {
        let pelisJson = fs.readFileSync(this.db, 'utf-8');
        let pelis = JSON.parse(pelisJson);
        return pelis
    },
    cantidad: function() {
        return this.leerJSON().total_movies
    },
    listarPeliculas: function() {
        let pelis = this.leerJSON();
        let cartelera = []
        pelis.movies.forEach(function(peli) {
            cartelera.push(peli)
        })
        cartelera.sort()
        return cartelera
    }
}
module.exports = enCartelera


