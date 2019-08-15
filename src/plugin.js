import Toast from './toast'
export default{
  install(Vue, options){
    Vue.prototype.$toast = function (message, toastOptions){
      function x(){
        let Constructor = Vue.extend(Toast)
        let toast = new Constructor({
          propsData: toastOptions
        })
        // 上面两句死记硬背
  
        toast.$slots.default = [message]  // 插槽的文本
        toast.$mount()  // 必须的，如果不mount toast所有生命周期钩子都不会执行  必须要注意顺序
        document.body.appendChild(toast.$el) // 把元素放到body中
      }
      x()  // 新建一个函数
    }
  }
}