import Toast from './toast'

let currentToast

export default{
  install(Vue, options){
    Vue.prototype.$toast = function (message, toastOptions){
      if (currentToast) { 
        currentToast.close()
      }
      currentToast = createToast({
        Vue, 
        message, 
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }
      })  // 新建一个函数
    }
  }
}





























/* helpers */
function createToast({Vue,message,propsData,onClose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  // 上面两句死记硬背

  toast.$slots.default = [message]  // 插槽的文本
  toast.$mount()  // 必须的，如果不mount toast所有生命周期钩子都不会执行  必须要注意顺序
  toast.$on('close',onClose)
  document.body.appendChild(toast.$el) // 把元素放到body中
  return toast
}