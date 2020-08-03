/**
 * 从url中获取参数（如果为提供url，则获取地址栏中地址）
 * @param {String} name 
 * @param {String} url 
 */
function GetUrlQueryValue(name, url) {
  if (!url) {
    url = window.location.search
  }
  var reg = new RegExp("(^|&|\\u003F)" + name + "=([^&]*)(&|$)", "i");
  var r = decodeURI(url).substr(1).match(reg);
  if (r != null) return r[2]; return null;
}

export default {
  GetUrlQueryValue
}