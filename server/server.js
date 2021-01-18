const express = require("express"),
  config = require("./config"),
  app = express(),
  fsPromise = require("./fs"),
  bodyparser = require('body-parser');
const { responseInfo } = require('./lib/utils');

app.listen(config.port, _ => {
  console.log(`Server is created ${config.port}`)
});

/** app.use 中间件：在某些事情之前统一做的事情 */
app.use(async (req, res, next) => {
  req.USE_DATA = await fsPromise.readFile('./mock/user.json')
  req.USE_DATA = JSON.parse(req.USE_DATA)
  next();
})

// 使用bodyparser中间件
app.use(bodyparser.urlencoded({
  // 解析后的值放到 req.body上
  extended: false
}
))

app.get('/api/list', async (req, res) => {
  let USER_DATA = JSON.parse(await fsPromise.readFile('./mock/user.json'));
  let total = USER_DATA.length;
  let { pageIndex = 1, pageSize = 10 } = query;
  pageIndex = parseInt(pageIndex);
  pageSize = parseInt(pageSize);

  let start = (pageIndex - 1) * 10, end = pageIndex * pageSize - 1;
  end >= total ? end = total - 1 : null;
  let data = [];

  for (let i = start; i <= end; i++) {
    data.push(USER_DATA[i])
  }
  if (data.length === 0) {
    responseInfo(res, {
      code: 1,
      msg: "no match found"
    })
  }
  else {
    responseInfo(res, {
      code: 0,
      msg: 'ok',
      pageIndex,
      pageSize,
      total,
      data
    })
  }
  return
})

app.post('/api/add', (req, res) => {
  let {
    name = '',
    phone = ''
  } = req.body;
})

app.use(express.static('./static'))

app.use((req, res, next) => {
  res.status(404).send({
    code: 1,
    codeText: 'not found'
  })
})