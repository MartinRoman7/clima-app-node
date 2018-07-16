//const axios = require('axios');
const color = require('colors/safe');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad a obtener su clima',
        demand: true
    }
}).argv;

//console.log(color.green(argv.direccion));

// let encodeUrl = encodeURI(argv.direccion)

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDPjQIyVGqU4B5eT-Nd-MUK2hXwdVhGIFE`)
//     .then((result) => {
//         //console.log(result.data);
//         //console.log(JSON.stringify(result.data, undefined, 2));
//         let location = result.data.results[0];
//         console.log(location);
//         // Mejor visualización (No recomendado para obtención de datos)
//         //let data = JSON.stringify(result.data.results[0], undefined, 2);
//         //console.log(data);
//         console.log('Dirección: ', location.formatted_address);
//         console.log('Lat: ', location.geometry.location.lat);
//         console.log('Longitud: ', location.geometry.location.lng);

//     }).catch((err) => {
//         console.log('Error: ', err);
//     });

// El uso de async y await simplifica esto
// lugar.getLugarLatLng(argv.direccion)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// clima.getClima(19.4326077, -99.133208)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion); //Función get en el archivo lugar
        let temp = await clima.getClima(coors.lat, coors.lng); //Los return de lugar son leidos 
        return color.green(`El clima en ${coors.direccion} es de ${temp}°C`);
    } catch (error) {
        return color.red(`No se puedo determinar el clima en ${direccion}`);
    }

}

getInfo(argv.direccion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });