const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/api', (req, res) => {
  res.json({
    message: 'Ahoy!',
    users: [{
      id: 1,
      name: 'John Doe'
    }, {
      id: 2,
      name: 'Chuck Norris'
    }]
  })
})

app.listen(3000, () => console.log('It\'s work!'))
