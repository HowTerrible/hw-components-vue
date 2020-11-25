import ArrayHelper from "./array-helper"
import DateHelper from "./date-helper"
import TreeHelper from "./tree-helper"
import Security from "../lib/security"
/**
 * 从url中获取参数（如果为提供url，则获取地址栏中地址）
 * @param {String} name 
 * @param {String} url 
 */
function GetUrlQueryValue(name, url) {
  if (!url) {
    url = window.location.href
  }
  var reg = new RegExp("(^|&|\\u003F)" + name + "=([^&]*)(&|$)", "i");
  var r = decodeURI(url).substr(1).match(reg);
  if (r != null) return r[2]; return null;
}

function isNumber(value) {
  return value !== undefined && value !== null && !isNaN(value);
}

function isNullOrEmpty(value) {
  return value === undefined || value === null
}

/**
 * 加密打开公卫页面用的参数
 * @param {String} param 
 */
function encryptPublicHealthDialogParams(params, token) {
  // 计算MD5
  let md5 = Security.md5(
    params + token
  );
  // 计算aes
  let aes = Security.aes.aesEncryptBase64(
    JSON.stringify({
      md5,
      params
    })
  );
  // URL编码
  return encodeURIComponent(aes);
}

export { DateHelper }

export default {
  GetUrlQueryValue,
  encryptPublicHealthDialogParams,
  ...ArrayHelper,
  ...TreeHelper,
  isNumber,
  isNullOrEmpty,
  DateHelper
}