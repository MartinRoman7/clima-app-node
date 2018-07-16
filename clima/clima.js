const axios = require('axios');

const getClima = async(lat, lon) => {
    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9a58046315bceaa4e0015d5a9a48235a`)
        //console.log(result);
        // let clima = result.data.main.temp;

    // return {
    //     temperatura: clima
    // }
    return result.data.main.temp;
}

module.exports = {
    getClima
}