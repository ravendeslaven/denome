import Handlebars from 'express-handlebars'

export const admin = Handlebars.registerHelper('with', function(context, options) {
    return options.fn(context)
})