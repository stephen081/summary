(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{386:function(t,a,s){"use strict";s.r(a);var n=s(25),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2-找到-k-个最接近的元素-middle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-找到-k-个最接近的元素-middle"}},[t._v("#")]),t._v(" 2.找到 K 个最接近的元素（middle）")]),t._v(" "),s("h2",{attrs:{id:"一、题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、题目"}},[t._v("#")]),t._v(" 一、题目")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/find-k-closest-elements/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode658.找到 K 个最接近的元素"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("给定一个排序好的数组  arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。")]),t._v(" "),s("p",[t._v("整数 a 比整数 b 更接近 x 需要满足：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("|a - x| < |b - x| 或者\n|a - x| == |b - x| 且 a < b\n")])])]),s("p",[t._v("示例 1：")]),t._v(" "),s("p",[t._v("输入：arr = [1,2,3,4,5], k = 4, x = 3\n输出：[1,2,3,4]\n示例 2：")]),t._v(" "),s("p",[t._v("输入：arr = [1,2,3,4,5], k = 4, x = -1\n输出：[1,2,3,4]")]),t._v(" "),s("p",[t._v("提示：")]),t._v(" "),s("p",[t._v("1 <= k <= arr.length\n1 <= arr.length <= 104\n数组里的每个元素与 x 的绝对值不超过 104")]),t._v(" "),s("h2",{attrs:{id:"二、基础模版-iii"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、基础模版-iii"}},[t._v("#")]),t._v(" 二、基础模版 III")]),t._v(" "),s("p",[t._v("因为我们的判断区间最少为 2 个元素，所以我们要注意循环的执行条件")]),t._v(" "),s("ol",[s("li",[t._v("简单的判断边界： "),s("code",[t._v("nums.length === 0，return -1")]),t._v("；")]),t._v(" "),s("li",[t._v("定义初始的左右边界："),s("code",[t._v("left = 0, right = nums.length - 1")]),t._v("；")]),t._v(" "),s("li",[t._v("确定执行条件："),s("code",[t._v("left + 1 < right")]),t._v("，这也意味着查找区间要存在 3 个元素；")]),t._v(" "),s("li",[t._v("向左查找时："),s("code",[t._v("right = mid")]),t._v("；")]),t._v(" "),s("li",[t._v("向左查找时："),s("code",[t._v("left = mid")]),t._v("；")]),t._v(" "),s("li",[t._v("判断剩下的两个元素哪个符合目标元素，并返回结果；")])]),t._v(" "),s("h2",{attrs:{id:"三、题解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、题解"}},[t._v("#")]),t._v(" 三、题解")]),t._v(" "),s("p",[s("strong",[t._v("分析模版")])]),t._v(" "),s("ul",[s("li",[t._v("我们的目标是：寻找目标值的起始下标和终止下标，但它是可能重复的")]),t._v(" "),s("li",[t._v("针对这样的情况，我们要将判断拆解成查找目标首次出现的位置，和最后一次出现的位置")])]),t._v(" "),s("p",[s("strong",[t._v("JavaScript 代码")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("findClosestElements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意我们让出来k的值，当作我们的“备用值”")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x-arr[mid] > arr[mid+k]-x，arr[mid+k]的点一定距离目标值更近")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 且它距离arr[mid]是k个，证明arr[mid]一定不会存在与结果区间中，它也不可能是起始点")]),t._v("\n      left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们在移动满足条件的起始点")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x-arr[mid] <= arr[mid+k]-x，arr[mid]下标的点一定距离目标值更近")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以我们需要收缩右边界")]),t._v("\n      right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 压缩右区间")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"四、写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、写在最后"}},[t._v("#")]),t._v(" 四、写在最后")]),t._v(" "),s("p",[t._v("本文是"),s("code",[t._v("二分查找-模版III")]),t._v(" 的第最后一题，我会在之后将二分法的常见问题整理成完成的文档，我们一起加油～")]),t._v(" "),s("p",[t._v("如果对你有所帮助不妨给本项目的"),s("a",{attrs:{href:"https://github.com/webbj97/summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("github 点个 star"),s("OutboundLink")],1),t._v("，这是对我最大的鼓励")]),t._v(" "),s("p",[s("strong",[t._v("关于我")])]),t._v(" "),s("ul",[s("li",[t._v("花名：余光")]),t._v(" "),s("li",[t._v("WX：j565017805")]),t._v(" "),s("li",[t._v("沉迷 JS，水平有限，虚心学习中")])]),t._v(" "),s("p",[s("strong",[t._v("其他沉淀")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://webbj97.github.io/leetCode-Js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 版 LeetCode 题解"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://webbj97.github.io/summary/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端进阶笔记"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://yuguang.blog.csdn.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSDN"),s("OutboundLink")],1)])]),t._v(" "),s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/hlg-ui/1607504321645897/yuguang-vue-bottom.gif",width:"100%"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);