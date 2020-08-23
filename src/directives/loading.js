/* eslint-disable */
function generateLoading(h) {
  let loading = document.createElement("div");
  loading.style.display = "none";
  Object.assign(loading.style, {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    "background-color": "rgba(255, 255, 255, 0.3)",
    "user-select": "none",
    "text-align": "center",
    "vertical-align": "middle",
    "z-index": 2000,
    "transition-duration": "300ms",
    "opacity": 0
  })
  loading.className = "hw-loading";

  let loadingContent = document.createElement("span");
  loadingContent.innerText = "加载中..."

  Object.assign(loadingContent.style, {
    position: "absolute",
    "top": "50%",
    "font-size": "16px",
    "line-height": "24px",
    "margin-top": "-12px",
    color: "#aaa"
  })

  loading.appendChild(loadingContent);
  return loading;
}

let loadingMap = new Map()

const directive = {
  inserted(el, { value }, vnode) {
    const elPosition = el.currentStyle ? el.currentStyle["position"] : window.getComputedStyle(el, null)["position"];
    !elPosition || elPosition === "static" ? el.style.position = "relative" : null
    let loading = generateLoading()
    el.appendChild(loading);
    loadingMap.set(el, loading)
  },
  update(el, { value, oldValue }) {
    let loading = loadingMap.get(el)
    loading.style.display = value ? "block" : "none"
    loading.style.opacity = 1
  },
  unbind(el) {
    loadingMap.delete(el);
  }
}

export default directive