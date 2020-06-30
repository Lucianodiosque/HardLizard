
const fs = require("fs");
let masVotadas = {
    db: './data/movies.json',
    titulo: "Mas Votadas: \n\n",
    leerJSON: function() {
        let pelisJson = fs.readFileSync(this.db, 'utf-8');
        let pelis = JSON.parse(pelisJson);
        return pelis
    },

    cantidad: function() {
        let pelis = this.leerJSON();
        let cantidadFiltrada = pelis.movies.filter(function(movie){
            return movie.vote_average >= 7
        })
        return cantidadFiltrada.length
    },
    filtro: function() {
        let movies = this.leerJSON();
        let masVotadas = movies.movies.filter(function(movie){
            return movie.vote_average >= 7
        })
        return masVotadas  
    },
    ratingPromedio: function(){
        let pelis = this.filtro()
        let rating = []
        pelis.forEach(movie => {
            rating.push(movie.vote_average) 
        });
        let ratingSum = rating.reduce(function(acum,num){
            return acum + num
        })
        return (ratingSum / pelis.length)
        }
    
}


module.exports = masVotadas