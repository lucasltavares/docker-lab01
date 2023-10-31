const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello product service'))
app.listen(port, () => console.log(`Product service listening on port ${port}!`))
