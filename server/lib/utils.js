function responseInfo(res, options) {
  let config = Object.assign({
    code: 0,
    codeText: "ok"
  }, options)
  res.status(res).type('appication/json').send(config)
}

module.exports = {
  responseInfo
}