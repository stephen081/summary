(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{406:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"剑指-offer-03-数组中重复的数字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#剑指-offer-03-数组中重复的数字"}},[t._v("#")]),t._v(" 剑指 Offer 03. 数组中重复的数字")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("更好的阅读体验应该是：")]),t._v(" "),a("ol",[a("li",[t._v("审题-思考")]),t._v(" "),a("li",[t._v("答题")]),t._v(" "),a("li",[t._v("整理-归纳")])])]),t._v(" "),a("h2",{attrs:{id:"一、题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、题目"}},[t._v("#")]),t._v(" 一、题目")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problemset/lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode 剑指 offer 集合"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在一个长度为 n 的数组 nums 里的所有数字都在 0 ～ n-1 的范围内。\n数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。")]),t._v(" "),a("p",[a("strong",[t._v("示例：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：[2, 3, 1, 0, 2, 5, 3]\n\n输出：2 或 3\n")])])]),a("h2",{attrs:{id:"二、题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、题解"}},[t._v("#")]),t._v(" 二、题解")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("findRepeatNumber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"三、写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、写在最后"}},[t._v("#")]),t._v(" 三、写在最后")]),t._v(" "),a("p",[t._v("如果对你有所帮助不妨给本项目的"),a("a",{attrs:{href:"https://github.com/webbj97/summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("github 点个 star"),a("OutboundLink")],1),t._v("，这是对我最大的鼓励")]),t._v(" "),a("p",[a("strong",[t._v("关于我")])]),t._v(" "),a("ul",[a("li",[t._v("花名：余光")]),t._v(" "),a("li",[t._v("WX：j565017805")]),t._v(" "),a("li",[t._v("沉迷 JS，水平有限，虚心学习中")])]),t._v(" "),a("p",[a("strong",[t._v("其他沉淀")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://webbj97.github.io/leetCode-Js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 版 LeetCode 题解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://webbj97.github.io/summary/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端进阶笔记"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://yuguang.blog.csdn.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSDN"),a("OutboundLink")],1)])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/hlg-ui/1607504321645897/yuguang-vue-bottom.gif",width:"100%"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);