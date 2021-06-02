(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{487:function(t,s,a){"use strict";a.r(s);var n=a(25),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css的上下文之bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css的上下文之bfc"}},[t._v("#")]),t._v(" CSS的上下文之BFC")]),t._v(" "),a("blockquote",[a("p",[t._v("看到这个名词，可能会有些陌生，但其实 上下文 = 区域，如果这么理解的话就会有行级上下文、块级上下文、flex上下文等等有一定排列规则的区域，我们今天只聊一聊 块级格式化上下文（BFC）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210225181216355.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"一、什么是bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是bfc"}},[t._v("#")]),t._v(" 一、什么是BFC？")]),t._v(" "),a("p",[t._v("BFC全称”Block Formatting Context”, 中文为“块级格式化上下文”。是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。")]),t._v(" "),a("p",[t._v("下列方式会创建块格式化上下文（列举常见的方式）：")]),t._v(" "),a("ul",[a("li",[t._v("根元素（"),a("code",[t._v("<html>")]),t._v("）")]),t._v(" "),a("li",[t._v("浮动元素（元素的 "),a("code",[t._v("float")]),t._v(" 不是 none）")]),t._v(" "),a("li",[t._v("绝对定位元素（元素的 position 为 absolute 或 fixed）")]),t._v(" "),a("li",[t._v("display 为 inline-block、table-cells、flex")]),t._v(" "),a("li",[t._v("overflow 计算值不为 visible 的块元素")])]),t._v(" "),a("p",[t._v("块格式化上下文包含创建它的元素内部的所有内容。")]),t._v(" "),a("p",[a("strong",[t._v("整理一下：")])]),t._v(" "),a("p",[t._v("BFC属于普通的文档流，具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，它有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。")]),t._v(" "),a("h2",{attrs:{id:"二、bfc的特点以及应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、bfc的特点以及应用"}},[t._v("#")]),t._v(" 二、BFC的特点以及应用")]),t._v(" "),a("h4",{attrs:{id:"_2-1-同一个bfc下-外边距会发生折叠"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-同一个bfc下-外边距会发生折叠"}},[t._v("#")]),t._v(" 2.1 同一个BFC下，外边距会发生折叠")]),t._v(" "),a("p",[t._v("来看这样一段代码：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("95"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 172"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 182"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210225150958328.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("strong",[t._v("现象：")])]),t._v(" "),a("p",[t._v("明明两个child都存在100px的外边距，但他们实际间隔却不是200px，而是100px，这算是一种合并“规则”，当你发现你的页面因为加入了margin而出现了奇怪的问题，不妨往合并的方向思考")]),t._v(" "),a("p",[a("strong",[t._v("解释：")])]),t._v(" "),a("p",[t._v("同一个BFC中，相邻的兄弟元素之间的相对的margin-bottom和margin-top会进行合并，并且显示的是较大值。")]),t._v(" "),a("p",[a("strong",[t._v("解决与注意：")])]),t._v(" "),a("p",[t._v("想要解决这样的问题，我们可以通过将两个child放置于不同的BFC中，直接上图：")]),t._v(" "),a("p",[t._v("下图通过BFC解决了问题，是否产生了新的问题？是否可以通过其他方式解决呢？希望大家能灵活选择噢～\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210225153141902.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_2-2-解决父子元素之间margin塌陷问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-解决父子元素之间margin塌陷问题"}},[t._v("#")]),t._v(" 2.2 解决父子元素之间margin塌陷问题")]),t._v(" "),a("p",[t._v("来看这样一段代码：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("149"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 98"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 98"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("95"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 172"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 182"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210225153806864.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("现象：")])]),t._v(" "),a("ul",[a("li",[t._v("box元素存在外边距100px，相对于body的效果生效了，毫无疑问；")]),t._v(" "),a("li",[t._v("child元素存在外边距50px，相对于box的效果仅左侧生效了，存在疑问；")])]),t._v(" "),a("p",[a("strong",[t._v("解释：")])]),t._v(" "),a("p",[t._v("有了2.1小节的经验，大家会猜测是不是margin再次发生了合并？也可以，但更合理的形容叫 "),a("strong",[t._v("“margin塌陷”")]),t._v("。")]),t._v(" "),a("p",[t._v("父子相邻嵌套的元素在垂直方向的margin会发生塌陷，并取最大值。")]),t._v(" "),a("p",[t._v("拿例子中的"),a("code",[t._v("box元素")]),t._v("举例，box作为顶，子元素向外称起50px却失效了，可以理解为顶塌陷了。")]),t._v(" "),a("p",[t._v("如果子元素的margin-top = 200px 会发生什么呢？")]),t._v(" "),a("p",[a("strong",[t._v("解决与注意：")])]),t._v(" "),a("p",[t._v("通过触发BFC，你可以解决当下的问题，但是请思考，子元素的是否需要margin来实现间距，给box元素添加padding会不会更好一些？\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210225155432411.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_2-3-bfc-可以包含浮动的元素-清除浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-bfc-可以包含浮动的元素-清除浮动"}},[t._v("#")]),t._v(" 2.3 BFC 可以包含浮动的元素（清除浮动）")]),t._v(" "),a("p",[t._v("我们都知道，浮动的元素会脱离普通文档流，来看下下面一个例子：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ddd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210225160259970.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("现象：")])]),t._v(" "),a("ul",[a("li",[t._v("child因为浮动，脱离了文档流；")]),t._v(" "),a("li",[t._v("box盒子的高度只计算了border；")])]),t._v(" "),a("p",[a("strong",[t._v("解释：")])]),t._v(" "),a("ul",[a("li",[t._v("因为子元素已经脱离了文档流，所以父元素在计算高度时忽略了它；")])]),t._v(" "),a("p",[a("strong",[t._v("解决：")])]),t._v(" "),a("p",[t._v("触发容器的 BFC，使得容器包裹着浮动元素。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210225161012774.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_2-4-bfc-解决文字环绕的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-bfc-解决文字环绕的问题"}},[t._v("#")]),t._v(" 2.4 BFC 解决文字环绕的问题")]),t._v(" "),a("p",[t._v("浮动的目的。最初时，浮动只能用于图像（某些浏览器还支持表的浮动），目的就是为了允许其他内容（如文本）“围绕”该图像。而后来的CSS允许浮动任何元素。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ddd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("81"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 196"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 204"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        解决文字环绕的问题, 解决文字环绕的问题, 解决文字环绕的问题, 解决文字环绕的问题\n        解决文字环绕的问题, 解决文字环绕的问题, 解决文字环绕的问题, 解决文字环绕的问题\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210225165200811.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("strong",[t._v("现象：")])]),t._v(" "),a("ul",[a("li",[t._v("给左侧子元素设置了左浮动，使得文字环绕在它周围，但为什么文字会被环绕，而不是被遮挡？")])]),t._v(" "),a("p",[a("strong",[t._v("解释：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210225172334976.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("看到float会脱离文档流，这是相对于盒子模型来说的。但它没有脱离文本流。")]),t._v(" "),a("ul",[a("li",[t._v("文档流是相对于盒子模型讲的")]),t._v(" "),a("li",[t._v("文本流是相对于文子段落讲的")])]),t._v(" "),a("p",[t._v("元素浮动之后，会让它脱离文档流，也就是说当它后面还有元素时，其他元素会无视它所占据了的区域，直接在它身下布局。但是文字却会认同浮动元素所占据的区域，围绕它布局，也就是没有脱离文本流。")]),t._v(" "),a("p",[t._v("在"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/CSS/float",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN上提到"),a("OutboundLink")],1),t._v("，该元素从网页的正常流动(文档流)中移除，"),a("strong",[t._v("尽管仍然保持部分的流动性")]),t._v("（与绝对定位相反）。")]),t._v(" "),a("p",[a("strong",[t._v("解决")])]),t._v(" "),a("p",[t._v("将包裹文字的元素置为BFC，看图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210225180430948.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("问题解决了，新知识又增加了，例如自适应两栏布局，请看下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021022518092059.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210225181148302.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("p",[t._v("《CSS基础系列》第四篇文章")]),t._v(" "),a("p",[t._v("如果对你有所帮助不妨给本项目的"),a("a",{attrs:{href:"https://github.com/webbj97/summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("github 点个 star"),a("OutboundLink")],1),t._v("，这是对我最大的鼓励！")]),t._v(" "),a("p",[a("strong",[t._v("关于我")])]),t._v(" "),a("ul",[a("li",[t._v("花名：余光")]),t._v(" "),a("li",[t._v("WX：j565017805")]),t._v(" "),a("li",[t._v("沉迷 JS，水平有限，虚心学习中")])]),t._v(" "),a("p",[a("strong",[t._v("其他沉淀")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://webbj97.github.io/leetCode-Js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github: Js版LeetCode题解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://webbj97.github.io/summary/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端进阶笔记"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/jbj6568839z/category_7944500.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 基础"),a("OutboundLink")],1)])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/hlg-ui/1607504321645897/yuguang-vue-bottom.gif",width:"100%"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);