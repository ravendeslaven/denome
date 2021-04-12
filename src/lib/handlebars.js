const { format } = require('timeago.js')

const helpers = {}

helpers.timeago = (timestamp) => {
    return formar(timestamp)
}

module.exports = helpers