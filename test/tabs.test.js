const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    // 测能测的 props
    it('子组件只能是 tabs-head 和 tabs-body',(done)=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-tabs :selected="finance">
            <g-tabs-head>
                <g-tabs-item name="woman">美女</g-tabs-item>
                <g-tabs-item name="finance">财经</g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
                <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
                <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        `
        let vm = new Vue({
            el: div
        })
        setTimeout(()=>{
            console.log(vm.$el.outerHTML)
            done()
        },1000)
        })
    })
    // 放弃了这个测试
    // it('子组件只能是 tabs-head 和 tabs-body',()=>{

    //     const div = document.createElement('div')
    //     document.body.appendChild(div)
    //     div.innerHTML = `
    //       <g-tabs>
    //         <div>hi</div>
    //       </g-tabs>
    //     `
        // 异步报错
        // expect(()=>{
        //     const vm = new Vue({
        //         el:div
        //     })
        // }).to.throw()

        // 同步报错
        // expect(()=>{
        //     throw new Error('hi')
        // }).to.throw()

        // 模拟异步报错
        // expect(()=>{
        //     setTimeout(()=>{
        //         throw new Error('hi')
        //     },0)
        // }).to.throw()
    // })
//  it('可以设置icon.', () => {
//      const Constructor = Vue.extend(Button)
//      const vm = new Constructor({
//      propsData: {
//          icon: 'settings'
//      }
//      }).$mount()
//      const useElement = vm.$el.querySelector('use')
//      expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
//      vm.$destroy()
//  })
})