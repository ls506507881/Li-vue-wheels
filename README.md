# 框架 - 一个 Vue UI 组件

**Author： Herbert Lee**

[![Build Status](https://travis-ci.org/ls506507881/Li-vue-wheels.svg?branch=master)](https://travis-ci.org/ls506507881/Li-vue-wheels)

## 介绍
学习 Vue 过程中做的一个 UI框架，希望可以多多交流。

## 开始使用

1. 添加 css 样式

	使用本框架前，请在 css 中开启 border-box

	```
	*,*::before,*::after{box-sizing: border-box;}
	```
	IE 8 及以上浏览器都支持此样式。

	你还需要设置默认颜色等变量（后续会改为 scss 变量）
	```
	html {
		--button-height: 32px;
		--font-size: 14px;
		--button-bg: white;
		--button-active-bg: #eee;
		--border-radius: 4px;
		--color: #333;
		--border-color: #999;
		--border-color-hover: #666;
	}
	```
	IE 15 及以上浏览器都支持此样式。
2. 安装li-vue-test-1
	```
	npm i --save li-vue-test-1
	```
3. 引入
	```
		import { Button,ButtonGroup,Icon } from 'li-vue-test-1'
		import 'li-vue-test-1/dist/index.css'

		export default {
			name: 'app',
			components: {
				HelloWorld,
				'g-button':Button,
				'g-icon':Icon
			}
		}
	```

## 文档

## 提问

## 变更记录

## 联系方式

 1






