const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()

app.use(cors())

app.get('/api/whoami', function(req, res) {
  const ipaddress = req.headers['x-forwarded-for'] 
    || req.connection.remoteAddress
  const language =  req.headers["accept-language"]
  
  const software = req.headers['user-agent']
  
  const resObj = { ipaddress, language, software }
  res.send(resObj)
})

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
