(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{488:function(t,_,e){"use strict";e.r(_);var r=e(25),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"css的上下文之层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css的上下文之层叠上下文"}},[t._v("#")]),t._v(" CSS的上下文之层叠上下文")]),t._v(" "),e("blockquote",[e("p",[t._v("看到层叠，大家一定会联想到定位元素会是的元素之间发生“遮挡”，而z-index可以改变他们之间的遮挡优先级，但这仅仅是层叠这一概念中很小的一部分。\n本文就来聊一聊css中的层叠上下文到底是如何给元素规定叠加顺序的。")])]),t._v(" "),e("h2",{attrs:{id:"一、什么是层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是层叠上下文"}},[t._v("#")]),t._v(" 一、什么是层叠上下文？")]),t._v(" "),e("p",[t._v("层叠上下文，英文称作”stacking context”. 我们假定用户正面向（浏览器）视窗或网页，而 HTML 元素沿着其相对于用户的一条虚构的 z 轴排开，层叠上下文就是对这些 HTML 元素的一个三维构想。众 HTML 元素基于其元素属性按照优先级顺序占据这个空间。")]),t._v(" "),e("p",[t._v("我们可以把层叠上下文同样可以理解成是元素的属性。")]),t._v(" "),e("p",[t._v("下列方式会形成层叠上下文（列举常见的方式）：")]),t._v(" "),e("ul",[e("li",[t._v("position 值为 static 以外的值，且 z-index 值不为 auto;")]),t._v(" "),e("li",[t._v("flex (flexbox) 容器的子元素，且 z-index 值不为 auto;")]),t._v(" "),e("li",[t._v("grid (grid) 容器的子元素，且 z-index 值不为 auto;")]),t._v(" "),e("li",[t._v("opacity 属性值小于 1 的元素;")]),t._v(" "),e("li",[t._v("transform属性 不为none的元素;")])]),t._v(" "),e("p",[e("strong",[t._v("总结：")])]),t._v(" "),e("p",[t._v("在层叠上下文中，子元素同样也按照上面解释的规则进行层叠。 重要的是，其子级层叠上下文的 z-index 值只在父级中才有意义。子级层叠上下文被自动视为父级层叠上下文的一个独立单元。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210228133405935.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),e("h2",{attrs:{id:"二、什么是层叠水平"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、什么是层叠水平"}},[t._v("#")]),t._v(" 二、什么是层叠水平？")]),t._v(" "),e("p",[t._v("“层叠水平”，英文称作”stacking level”，决定了同一个层叠上下文中元素在z轴上的显示顺序。网页中的每个元素都是独立的个体，他们一定是会有一个类似的排名排序的情况存在。而这个排名排序、论资排辈就是我们这里所说的“层叠水平”。")]),t._v(" "),e("p",[t._v("但注意，每一个层叠上下文内部的子元素都不会突破包裹它的上下文。")]),t._v(" "),e("p",[t._v("下面是引自"),e("a",{attrs:{href:""}},[t._v("张鑫旭大大的一段解释")]),t._v("，我觉得很通俗易懂：")]),t._v(" "),e("p",[t._v("所有的元素都有层叠水平，包括层叠上下文元素，层叠上下文元素的层叠水平可以理解为官员的职级，1品2品，县长省长之类。然后，对于普通元素的层叠水平，我们的探讨仅仅局限在当前层叠上下文元素中。为什么呢？因为否则没有意义。")]),t._v(" "),e("p",[t._v("翻译成术语就是：普通元素的层叠水平优先由层叠上下文决定，因此，层叠水平的比较只有在当前层叠上下文元素中才有意义。")]),t._v(" "),e("p",[e("strong",[t._v("举例：")])]),t._v(" "),e("p",[t._v("大家看下面的一段代码：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210226182358369.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),e("p",[e("strong",[t._v("现象：")])]),t._v(" "),e("p",[t._v("在这个例子中，每个被定位的元素都创建了独自的层叠上下文，因为他们被指定了定位属性和 z-index 值。我们把层叠上下文的层级列在下面：")]),t._v(" "),e("ul",[e("li",[t._v("DIV #1")]),t._v(" "),e("li",[t._v("DIV #2")]),t._v(" "),e("li",[t._v("DIV #3\n"),e("ul",[e("li",[t._v("DIV #4")]),t._v(" "),e("li",[t._v("DIV #5")])])])]),t._v(" "),e("p",[t._v("不同层的z-index他们的意义只相对于同一个层叠上下文。你会发现z-index：100的也没有覆盖z-index：1的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210228133436334.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),e("p",[e("strong",[t._v("结论：")])]),t._v(" "),e("p",[t._v("千万不要把层叠水平和CSS的z-index属性混为一谈。没错，某些情况下z-index确实可以影响层叠水平，但是，只限于定位元素以及flex盒子的孩子元素；而层叠水平所有的元素都存在。")]),t._v(" "),e("h2",{attrs:{id:"三、什么是层叠顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、什么是层叠顺序"}},[t._v("#")]),t._v(" 三、什么是层叠顺序？")]),t._v(" "),e("p",[t._v("“层叠顺序”英文称作”stacking order”. 表示元素发生层叠时候有着特定的垂直显示顺序，注意，这里跟上面两个不一样，上面的层叠上下文和层叠水平是概念，而这里的层叠顺序是规则。")]),t._v(" "),e("p",[t._v("在CSS2.1的年代，在CSS3还没有出现的时候（"),e("strong",[t._v("注意这里的前提")]),t._v("），层叠顺序规则遵循下面这张图（同样是引自张大大的旧图）：")]),t._v(" "),e("h2",{attrs:{id:"四、层叠上下文的特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、层叠上下文的特性"}},[t._v("#")]),t._v(" 四、层叠上下文的特性")]),t._v(" "),e("h4",{attrs:{id:"_4-1-准则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-准则"}},[t._v("#")]),t._v(" 4.1 准则")]),t._v(" "),e("ul",[e("li",[t._v("谁大谁上：当具有明显的层叠水平标示的时候，如识别的z-indx值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的那一个。通俗讲就是官大的压死官小的。")]),t._v(" "),e("li",[t._v("后来居上：当元素的层叠水平一致、层叠顺序相同的时候，在DOM流中处于后面的元素会覆盖前面的元素。\n在CSS和HTML领域，只要元素发生了重叠，都离不开上面这两个黄金准则。因为后面会有多个实例说明，这里就到此为止。")])]),t._v(" "),e("h4",{attrs:{id:"_4-2-特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-特性"}},[t._v("#")]),t._v(" 4.2 特性")]),t._v(" "),e("ul",[e("li",[t._v("层叠上下文的层叠水平要比普通元素高；")]),t._v(" "),e("li",[t._v("层叠上下文可以嵌套，内部层叠上下文及其所有子元素均受制于外部的层叠上下文。")]),t._v(" "),e("li",[t._v("每个层叠上下文和兄弟元素独立，也就是当进行层叠变化或渲染的时候，只需要考虑后代元素。")]),t._v(" "),e("li",[t._v("每个层叠上下文是自成体系的，当元素发生层叠的时候，整个元素被认为是在父层叠上下文的层叠顺序中。")])]),t._v(" "),e("p",[t._v("讲到这里我们对层叠上下文应该有了一定理解，我们共勉～")]),t._v(" "),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),e("p",[e("strong",[t._v("参考：")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.cdn.mozilla.net/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解CSS中的层叠上下文和层叠顺序"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("《CSS基础系列》第五篇文章，下期预告《CSS基础：flex基本属性》")]),t._v(" "),e("p",[t._v("如果对你有所帮助不妨给本项目的"),e("a",{attrs:{href:"https://github.com/webbj97/summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("github 点个 star"),e("OutboundLink")],1),t._v("，这是对我最大的鼓励！")]),t._v(" "),e("p",[e("strong",[t._v("关于我")])]),t._v(" "),e("ul",[e("li",[t._v("花名：余光")]),t._v(" "),e("li",[t._v("WX：j565017805")]),t._v(" "),e("li",[t._v("沉迷 JS，水平有限，虚心学习中")])]),t._v(" "),e("p",[e("strong",[t._v("其他沉淀")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://webbj97.github.io/leetCode-Js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github: Js版LeetCode题解"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://webbj97.github.io/summary/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端进阶笔记"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/jbj6568839z/category_7944500.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 基础"),e("OutboundLink")],1)])]),t._v(" "),e("p",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/hlg-ui/1607504321645897/yuguang-vue-bottom.gif",width:"100%"}})])])}),[],!1,null,null,null);_.default=a.exports}}]);