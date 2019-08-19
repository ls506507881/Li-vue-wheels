const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import Tabs from './tabs'
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

    it('子组件只能是 tabs-head 和 tabs-body',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-tabs><div>hi</div></g-tabs>
        `
        expect(()=>{
            const vm = new Vue({
                el:div
            })
        }).to.throw()
    })
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