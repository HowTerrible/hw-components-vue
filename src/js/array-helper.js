

/**
 * 此方法会使用 传入Model的ID 区Array中见检索，
 * 如果存在则不添加
 * 不存在则添加
 * @param {Array} array 目标数组
 * @param {Object} model 被添加项
 * @param {String} key 唯一键
 */
function addItemToArray(array, model, key) {
  var idNotInArray = true;
  for (var i in array) {
    if (key) {
      if (array[i][key] == model[key]) {
        idNotInArray = false;
        break;
      }
    } else {
      if (array[i] === model) {
        idNotInArray = false;
        break;
      }
    }
  }
  if (idNotInArray) {
    array.push(model);
  }
  return array;
}
/**
 * 从array中删除ID为id的项目
 * @param {Array} array 目标项目
 * @param {String} key 被删除项的唯一键
 * @param {String} keyValue 被删除项目唯一键的值
 */
function removeItemFromArray(array, keyValue, key) {
  // var deletedItemIndex;
  // for (var i = 0; i < array.length; i++) {
  //   if (array[i][key] == keyValue) {
  //     deletedItemIndex = i;
  //     break;
  //   }
  // }

  // if (deletedItemIndex != undefined && deletedItemIndex != null) {
  //   array = array.splice(deletedItemIndex, 1);
  // }
  //? 没有key，则当成普通index数组处理
  let targetIndex = -1;
  if (key) {
    targetIndex = array.findIndex(v => v[key] === keyValue);
  } else {
    targetIndex = array.findIndex(v => v === keyValue);
  }
  if (targetIndex >= 0) {
    array = array.splice(targetIndex, 1)
  }
  return array;
}

/**
 * 数组转对象
 * 将同样数据类型的数组转换成以
 * 数据类型中某个属性为键的对象
 * @param {Array} arr 数组
 * @param {String} key 数组中每个对象的key
 */
function arrayToObject(arr, key) {
  if (!key) {
    key = "id";
  }
  let result = new Object();
  if (arr && arr.length > 0) {
    arr.forEach(item => {
      result[item[key]] = item;
    });
  }
  return result
}

export default {
  addItemToArray,
  removeItemFromArray,
  arrayToObject
}