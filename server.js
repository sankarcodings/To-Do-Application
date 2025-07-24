

const app = require('./Server/app')

require('dotenv').config();
const port = process.env.PORT || 3000;


app.listen(port , ()=> {
    console.log(`Server Connected ${3000}`)
})