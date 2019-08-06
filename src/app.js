import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)  // 让chai使用这个间谍

const expect = chai.expect
// 单元测试
{
    // console.log(Button) // 对象没法通过对象实例化一个东西
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings'
        }
    })  //这个button 就是button实例
    // button.$mount()
    vm.$mount('#test')  // 通过js把按钮写到页面

    // 测试
    let useElement = vm.$el.querySelector('use')
    // console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')  // 期待href = #i-settings
    // 正确就不报错，不正确就报错
    vm.$el.remove()  //button元素删掉
    vm.$destroy()  //button对象删掉
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()  //button元素删掉
    vm.$destroy()  //button对象删掉
}
//检查icon位置
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'left'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()  //button元素删掉
    vm.$destroy()  //button对象删掉
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()  //button元素删掉
    vm.$destroy()  //button对象删掉
}
// 检测click
{
    // 怎么期待click函数被执行，使用函数的mock
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){})
    vm.$on('click',spy)  // 如果vm的click事件触发了，就执行这个间谍
    // vm.$on('click',function(){
    //     // console.log(1)
    //     expect(1).to.eq(1)  //随便写一句永远成立的话，但是这种测试方法是错误的
    // })
    // console.log(gButton.$el)
    // 期望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()  //期待间谍have.been.called 被调用过
}