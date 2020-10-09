const http = require("http")
const url = require("url")
const mime = require("mime")
const fsPromise = require("")
/**
 * req => 请求对象，客户端传递的信息
 *  req.pathname
 *  req.method
 *  req.url
 * res => 提供了服务器给客户端返回信息的方法
 *  res.writeHead 设置响应头
 *  res.end 结束响应并返回信息
 */
const server = http.createServer((req, res) => {
  let { pathname } = url.parse(req.url, true); // 第二个参数为true才会把参数解析成对象
  console.log(data)
  pathname = pathname === '/' ? '/index.html' : pathname

  const suffixREG = /\.([0-9A-Z]+)/i;
  const suffix = suffixREG.test(pathname) ? suffixREG.exec(pathname)[1] : null

  if (suffix) {
    const encoding = /JPG|JPEG|GIF|PNG|WAMP|BMP|ICO|SVG|MP3|MP4/i.test(suffix) ? null : 'utf-8';

    fsPromise.readFile(`./static${pathname}`, encoding)
      .then(res => {
        res.writeHead(200, {
          'content-type': mime.getType(suffix) // 使用mime 返回类型
        })
        res.end(res);
      })
      .catch(err => {
        console.log(err);
        res.writeHead(404, {
          'content-type': 'application/json'
        });
        res.end(JSON.stringify({
          code: 1,
          codeText: "not found"
        }))
      })
    return;
  }
});
server.listen(9000, _ => {
  console.log('Server is created')
})