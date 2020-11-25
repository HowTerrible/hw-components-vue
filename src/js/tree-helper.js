
let _keepUpper, _aditionalProps;
let flatResult = [];
/**
 * 调整树形数据，为其增加path记录树形结构并返回树节点的数组
 * @param {Array} rootNodes 树形的根节点数组
 * @param {Object} aditionalProps 需要附加在结果上的公共属性
 * @param {Boolean} keepUpper 是否保留上级节点
 */
export function trimTree(rootNodes, aditionalProps, keepUpper) {
  _aditionalProps = aditionalProps;
  _keepUpper = keepUpper
  return flatenTreeAddPath({ children: rootNodes });
}

/**
 * 通过递归，将树放在一个数组中
 * @param {} treeNode 
 * @param {*} path 
 */
function flatenTreeAddPath(treeNode, path) {
  const treeNodes = treeNode.children;
  treeNodes.forEach((treeNode) => {
    // 如果传了路径，则获取当前项去掉children的结果，给path
    // const { children, ..._parent } = column;
    // 使用解构浅度复制
    if (!path) {
      treeNode.path = [{ ...treeNode }];
    } else {
      treeNode.path = [...path, { ...treeNode }];
    }

    // 为每个项目增加公共属性
    for (var i in _aditionalProps) {
      treeNode[i] = _aditionalProps[i];
    }

    //? 不包含children的为子节点
    if (!treeNode.children) {
      flatResult.push(treeNode);
    } else {
      //? 是否保留根节点
      if (_keepUpper) {
        flatResult.push(treeNode);
      }
      // 保留根节点以便遍历
      // 如果路径有子节点，传第一个子节点（路径只有一个子节点，他只存树的有个分支）
      // 如果没有传入path本身
      flatenTreeAddPath(treeNode, treeNode.path);
    }
  });
  return flatResult;
}

let flatenResultResult;
/**
 * 平铺树
 * @param {Array} treeNode 根节点数组
 * @param {Function} callback 遍历每个节点时的自定义回调
 */
export function flatenTree(treeNode, callback) {
  flatenResultResult = []
  doFlatenTree({ children: treeNode }, callback)
  return flatenResultResult;
}
/**
 * 通过递归，将树放在一个数组中
 * @param {} treeNode 
 * @param {*} path 
 */
function doFlatenTree(treeNode, callback) {
  const treeNodes = treeNode.children;
  if (treeNodes && Array.isArray(treeNodes)) {
    treeNodes.forEach((treeNode) => {

      if (callback && typeof callback === Function) {
        callback(treeNode);
      }

      //? 不包含children的为子节点
      if (!treeNode.children) {
        flatenResultResult.push(treeNode);
      } else {
        // 如果路径有子节点，传第一个子节点（路径只有一个子节点，他只存树的有个分支）
        // 如果没有传入path本身
        doFlatenTree(treeNode);
      }
    });
  }
  else {
    // 没有children或者数据类型错误
   }
  return flatenResultResult;
}

export default { flatenTree }