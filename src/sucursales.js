const fs = require('fs');


let sucursales = {
    db:'./data/theaters.json',
    titulo:"Nuestras Salas: \n\n",
    leerJSON: function() {
        let salaJson = fs.readFileSync(this.db, 'utf-8');
        let salas = JSON.parse(salaJson);
        return salas
    },
    cantidad: function() {
        return this.leerJSON().total_theaters + "\n"
    }
}
module.exports = sucursales