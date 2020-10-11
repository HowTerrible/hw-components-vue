const express = require("express"),
  config = require("./config"),
  app = express();

app.listen(config.port, _ => {
  console.log(`Server is created ${config.port}`)
});

/** app.use 中间件：在某些事情之前统一做的事情 */
app.use((req, res, next) => {
  next();
})

app.get('/api/list', (req, res) => {

})

app.use(express.static('./static'))

app.use((req, res, next) => {
  res.status(404).send({
    code: 1,
    codeText: 'not found'
  })
})