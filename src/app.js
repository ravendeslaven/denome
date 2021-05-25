import express from "express"
import exphbs from "express-handlebars"
import Handlebars from 'handlebars'
import path from "path"
import cors from 'cors'

// Intance of __dirname and __filename string methods form path, to show actual path
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import session from "express-session"
import methodOverride from "method-override"
import flash from "connect-flash"
import passport from "passport"
import morgan from "morgan"
import MongoStore from "connect-mongo"


import { createAdminUser, createModUser } from "./lib/createUser.js"
import config from "./config.js"

import indexRoutes from "./routes/indexRoutes.js"
import blogRoutes from "./routes/blogRoutes.js"
import callendarsRoutes from './routes/calendarsRoutes.js'
import proyectRoutes from './routes/proyectRoutes.js'
import userRoutes from "./routes/usersRoutes.js"
import "./config/passport.js"


// Initializations
const app = express()
createAdminUser()

// Settings
app.set('port',  config.PORT )
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: 'hbs'
        //helpers: {
            //with: function(context, options) {
            //    return options.fn(context)
          //  }
        //},
    })
)
app.set('view engine', 'hbs')


// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('1_method'))
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
    store: MongoStore.create({ mongoUrl: config.MONGODB_URI}),
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(cors())



// Global variables
app.use((req, res, next) => {
    app.locals.success_msg = req.flash('success_msg'),
    app.locals.error_msg = req.flash('error_msg'),
    app.locals.error = req.flash('error'),
    app.locals.user = req.user || null,
    //app.locals.admin = req.user.admin || null,
    next()
})



// Routes
app.use(indexRoutes)
app.use(userRoutes)
app.use(blogRoutes)
app.use(callendarsRoutes)
app.use(proyectRoutes)

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
    res.render('404')
})

export default app;