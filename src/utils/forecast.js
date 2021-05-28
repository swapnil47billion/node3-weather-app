const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=19eaa1d830f4aff59c975123f02e1872&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                condition: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                humidity: body.current.humidity
            })
        }
    })
}

module.exports = forecast