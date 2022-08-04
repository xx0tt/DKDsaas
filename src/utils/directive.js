// 图片加载失败执行
export const imgError = {
  inserted(dom, { value }) {
    dom.addEventListener('error', function () {
      console.log('aaa')
      dom.src = value
    })
  }
}
