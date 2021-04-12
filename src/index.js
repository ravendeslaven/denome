import app from "./app.js"
import "./database.js"

// Server is listening
app.listen(app.get('port'))

console.log('Server on port', app.get('port'))
console.log('Enviroment', process.env.NODE_ENV)