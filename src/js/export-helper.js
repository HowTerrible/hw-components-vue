function handleExportResponse(response) {
  var blob = new Blob([response.data], { type: 'application/vnd.ms-excel;charset=utf-8' });
  if (blob.size > 0) {
    // 针对于IE浏览器的处理, 因部分IE浏览器不支持createObjectURL
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, response.fileName)
    } else {
      var downloadElement = document.createElement('a')
      var href = window.URL.createObjectURL(blob) // 创建下载的链接
      downloadElement.href = href
      downloadElement.download = response.fileName // 下载后文件名
      document.body.appendChild(downloadElement)
      downloadElement.click() // 点击下载
      document.body.removeChild(downloadElement) // 下载完成移除元素
      window.URL.revokeObjectURL(href) // 释放掉blob对象
    }
  }
}

export default {
  handleExportResponse
}