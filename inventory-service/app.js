const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello inventory service'))
app.listen(port, () => console.log(`Inventory service listening on port ${port}!`))
