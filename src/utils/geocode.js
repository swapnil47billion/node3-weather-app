const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3dhcG5pbHBhcmFka2FyMSIsImEiOiJja3AycnpvZzcwNGo0Mm9sZWdsY2txMDdvIn0.BDLN0O4ApWvKFLSAsVxKKA&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect geological service', undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to fnd the location. Please try again with different location name.', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode