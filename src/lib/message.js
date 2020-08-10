import { Message as message, Modal } from 'view-design';

let Vue;
const dialog = Modal
let msgBackground = true;

class Message {
  constructor(options = {}) {
    msgBackground = options.msgBackground || msgBackground;
    this.options = options;
    message.config({ duration: 5 });
    return;
  }
  info(msg) {
    message.info({ content: msg, background: true });
  }
  success(msg) {
    message.success({ content: msg, background: true });
  }
  warning(msg) {
    message.warning({ content: msg, background: true });
  }
  error(msg) {
    message.error({ content: msg, background: true });
  }
  info_alert(msg, title = "消息") {
    dialog.info({ content: msg, title })
  }
  success_alert(msg, title = "成功") {
    dialog.warning({ content: msg, title })
  }
  warning_alert(msg, title = "警告") {
    dialog.warning({ content: msg, title })
  }
  error_alert(msg, title = "错误") {
    dialog.error({ content: msg, title })
  }
  /**
   * confirm
   * @param {*} msg message
   * @param {*} confirmCB confirm callback
   * @param {*} cancelCB cancel callback
   * @param {*} config othenConfig title; confirmBtnText; cancelBtnText; type: success / info / warning / error
   */
  confirm(msg, confirmCB, cancelCB, config = { title: "提示", confirmBtnText: "确定", cancelBtnText: "取消", type: "warning" }) {
    dialog.confirm({
      title: config.title || '提示',
      content: msg,
      onOk: confirmCB || function () { },
      onCancel: cancelCB || function () { },
    });
  }
}

const install = (_Vue) => {
  _Vue.options.message = new Message()
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.message) {
        this.$message = this.$options.message;
      } else {
        this.$message = this.$parent && this.$parent.$message
      }
    }
  })
}

export default {
  install,
  Message: new Message()
};