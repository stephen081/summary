(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{418:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"走进-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#走进-event-loop"}},[t._v("#")]),t._v(" 走进 Event Loop")]),t._v(" "),a("blockquote",[a("p",[t._v("大家都知道，在使用 setTimeout 或是其他异步任务的时候要多加小心，这是因为其涉及到了 Js 的事件循环机制。很多时候因为经验，我们不需要知道其原理就能避免一些错误，但今天我们还是来聊一聊，浏览器下的EventLoop机制的那些事～")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530142042150.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"一、javascript-与单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、javascript-与单线程"}},[t._v("#")]),t._v(" 一、JavaScript 与单线程？")]),t._v(" "),a("p",[t._v("JavaScript 语言的一大特点就是"),a("strong",[t._v("单线程")]),t._v("，也就是说，同一个时间只能做一件事。那么，为什么 JavaScript 不能有多个线程呢？这样能提高效率啊。")]),t._v(" "),a("blockquote",[a("p",[t._v("答: "),a("br"),t._v("\nJavaScript 的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？")])]),t._v(" "),a("p",[t._v("所以，为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，将来也不会改变。")]),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530142104341.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",width:"60%"}}),t._v(" "),a("h2",{attrs:{id:"二、任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、任务"}},[t._v("#")]),t._v(" 二、任务")]),t._v(" "),a("blockquote",[a("p",[t._v("简单了解一下同步和异步这两个概念")])]),t._v(" "),a("h3",{attrs:{id:"_2-1-同步与异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-同步与异步"}},[t._v("#")]),t._v(" 2.1 同步与异步")]),t._v(" "),a("p",[t._v("一般而言，任务分为：发出调用和得到结果两步。")]),t._v(" "),a("ul",[a("li",[t._v("发出调用，“立即”得到结果是为同步")]),t._v(" "),a("li",[t._v("发出调用，但无法“立即”得到结果，需要额外的操作才能得到预期的结果是为异步。")])]),t._v(" "),a("p",[t._v("同步任务需要就是调用之后一直等待，直到返回结果。异步则是调用之后，不能直接拿到结果，通过一系列的手段才最终拿到结果（调用之后，拿到结果中间的时间可以介入其他任务）。")]),t._v(" "),a("p",[t._v("来阅读下面的代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("拟人分析：")])]),t._v(" "),a("ol",[a("li",[t._v("我要喝水 1：拿起水，喝～")]),t._v(" "),a("li",[t._v("我订了个午餐 2：上面预计送达时间 1 分钟，我当然不可能坐等外卖！")]),t._v(" "),a("li",[t._v("我订要喝水 3：拿起水，喝～")]),t._v(" "),a("li",[t._v("我定了个水果 4：上面预计送达时间 0，但只要是外卖，我就不着急！")]),t._v(" "),a("li",[t._v("订完外卖，我直接喝水 5：嗝～，不能再喝了，该谢谢了")]),t._v(" "),a("li",[t._v("此时我正好没事做，不如去看看外卖？")]),t._v(" "),a("li",[t._v("果然预计时间 0s 送达的水果先到了，我先吃口水果")]),t._v(" "),a("li",[t._v("吃完水果午餐也到了，嗯，愉快的一天")])]),t._v(" "),a("p",[t._v("需要注意的是：我们这样对待"),a("code",[t._v("setTimeout")]),t._v("（订外卖），是因为我们不知道要等多久，所以我们完全不关心他是不是马上送到，而是将眼前的任务（手里看得见的其他事情）执行完，当手里没事做时才会去执行"),a("code",[t._v("setTimeout")]),t._v("指定的回调函数（取外卖）。")]),t._v(" "),a("p",[t._v("这段分析合情合理，我感觉我离真相又进了一步！")]),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530142250993.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",width:"60%"}}),t._v(" "),a("h3",{attrs:{id:"_2-2-宏任务与微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-宏任务与微任务"}},[t._v("#")]),t._v(" 2.2 宏任务与微任务")]),t._v(" "),a("blockquote",[a("p",[t._v("下面的两种任务，都属于异步任务，但浏览器对他们的处理存在很大的区别。")])]),t._v(" "),a("ul",[a("li",[t._v("宏任务：MacroTask\n"),a("ul",[a("li",[t._v("如：setTimeout、setInterval、script（整体代码）、 I/O 操作、UI 渲染等。")])])]),t._v(" "),a("li",[t._v("微任务：MicroTask\n"),a("ul",[a("li",[t._v("如: new Promise().then(回调)、MutationObserver(html5 新特性) 等。")])])])]),t._v(" "),a("h2",{attrs:{id:"三、eventloop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、eventloop"}},[t._v("#")]),t._v(" 三、EventLoop")]),t._v(" "),a("blockquote",[a("p",[t._v("js 的另一大特点是非阻塞，借用书中的一句话：这需要一套机制来处理"),a("strong",[t._v("现在运行")]),t._v("的事情和"),a("strong",[t._v("将来要运行")]),t._v("的事情，而 EventLoop 就是这样一套机制。")])]),t._v(" "),a("h3",{attrs:{id:"_3-1-执行栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-执行栈"}},[t._v("#")]),t._v(" 3.1 执行栈")]),t._v(" "),a("p",[t._v("JS 执行栈采用的是后进先出的规则，当函数执行的时候，会被添加到栈的顶部，当执行栈执行完成后，就会从栈顶移出，直到栈内被清空。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-对同步、异步的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-对同步、异步的处理"}},[t._v("#")]),t._v(" 3.2 对同步、异步的处理")]),t._v(" "),a("p",[t._v("Javascript 单线程任务被分为同步任务和异步任务，同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021053012502727.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("注意")])]),t._v(" "),a("ul",[a("li",[t._v("宏任务队列可以有多个；")]),t._v(" "),a("li",[t._v("微任务队列只有一个；")])]),t._v(" "),a("h3",{attrs:{id:"_3-3-eventloop-过程解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-eventloop-过程解析"}},[t._v("#")]),t._v(" 3.3 EventLoop 过程解析")]),t._v(" "),a("p",[t._v("上图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210529222456556.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("值得一提的是，整个"),a("code",[t._v("<script>")]),t._v("标签包裹的整体代码，是属于宏任务。")]),t._v(" "),a("ol",[a("li",[t._v("任务会依次进入"),a("strong",[t._v("执行栈")]),t._v("，而首先入场的就是——宏任务全局上下文("),a("code",[t._v("script")]),t._v(")；")]),t._v(" "),a("li",[t._v("执行同步任务；")]),t._v(" "),a("li",[t._v("js 引擎遇到一个"),a("strong",[t._v("异步任务")]),t._v("后并不会一直等待其返回结果：\n"),a("ul",[a("li",[t._v("遇到异步任务，交给异步处理模块处理，对应的异步处理线程处理异步任务需要的操作，例如定时器的计数和异步请求监听状态的变更；")]),t._v(" "),a("li",[t._v("当异步事件返回结果后，事件触发线程将回调函数（标记）加入任务队列，等待栈为空时，依次进入栈中执行；")])])]),t._v(" "),a("li",[t._v("执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空：\n"),a("ul",[a("li",[a("strong",[t._v("先检查")]),t._v("微任务(microTask)队列，如果存在任务，则"),a("strong",[t._v("一次性执行完所有")]),t._v("微任务，无任务则跳过")]),t._v(" "),a("li",[a("strong",[t._v("后检查")]),t._v("宏任务(macroTask)队列，如果存在任务，则"),a("strong",[t._v("取出第一个")]),t._v("宏任务，执行，")])])])]),t._v(" "),a("p",[a("strong",[t._v("总结 1:")])]),t._v(" "),a("p",[t._v("每次单个宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为 null，然后再执行宏任务，如此循环。")]),t._v(" "),a("p",[a("strong",[t._v("总结 2:")])]),t._v(" "),a("p",[t._v("又因为第一次进入执行栈的总是宏任务（Script），而每次宏任务完成后，都会读取微任务队列，所以，大家也会听见另一种表述方式：、")]),t._v(" "),a("p",[t._v("每一轮循环中，同步任务执行后会在末尾执行并清空所有的微任务，会在下一轮循环中取第一个宏任务执行，如此循环。")]),t._v(" "),a("p",[t._v("下面我们用两段代码来分析一下今天所学～")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530142414407.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"四、示例分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、示例分析"}},[t._v("#")]),t._v(" 四、示例分析")]),t._v(" "),a("h3",{attrs:{id:"_4-1-同步-宏任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-同步-宏任务"}},[t._v("#")]),t._v(" 4.1 同步+宏任务")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0s延迟的定时任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("以这段代码举例，我们按照第三小节的步骤逐步分析：")]),t._v(" "),a("ol",[a("li",[t._v("从全局任务入口，首先打印日志 1，")]),t._v(" "),a("li",[t._v("遇到宏任务"),a("code",[t._v("setTimeout-log(2)")]),t._v("，交给异步处理模块")]),t._v(" "),a("li",[t._v("遇到宏任务"),a("code",[t._v("setTimeout-log(3)")]),t._v("，交给异步处理模块")]),t._v(" "),a("li",[t._v("顺序执行，打印日志 4，")]),t._v(" "),a("li",[t._v("同步任务执行完毕，读取微任务队列，为 null，则读取宏任务队列第一个，先返回处理结果的是"),a("code",[t._v("setTimeout-log(3)")]),t._v("，将 log(3) 内回调函数加入执行队列，顺序执行，打印日志 3，")]),t._v(" "),a("li",[t._v("继续重复步骤 5，顺序执行，打印日志 2，执行结束。")])]),t._v(" "),a("p",[a("strong",[t._v("注意：")])]),t._v(" "),a("p",[t._v("读取宏任务队列的任务，"),a("code",[t._v("setTimeout-log(3)")]),t._v("，虽然定时器的等待时间被设置 0 秒，但是"),a("code",[t._v("W3C")]),t._v("在"),a("code",[t._v("HTML标准")]),t._v("中规定，规定要求"),a("code",[t._v("setTimeout")]),t._v("中低于"),a("code",[t._v("4ms")]),t._v("的时间间隔算为 4ms。")]),t._v(" "),a("p",[t._v("由于浏览器在执行以上三步时，并未耗时很久，所以当宏任务"),a("code",[t._v("setTimeout-log(3)")]),t._v("1 执行完时， "),a("code",[t._v("setTimeout-log(1)")]),t._v("的等待时间并未结束，所以在 1 秒后打印,实际上并未等待 1 秒。")]),t._v(" "),a("h3",{attrs:{id:"_4-2-同步-宏任务-微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-同步-宏任务-微任务"}},[t._v("#")]),t._v(" 4.2 同步+宏任务+微任务")]),t._v(" "),a("p",[t._v("再来看下面的代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("第一轮循环")])]),t._v(" "),a("ol",[a("li",[t._v("同样从全局任务入口，遇到宏任务"),a("code",[t._v("setTimeout-log(1)")]),t._v("，交给异步处理模块，由于等待时间为 0，直接加入宏任务队列。")]),t._v(" "),a("li",[t._v("再次遇到宏任务"),a("code",[t._v("setTimeout-log(3)")]),t._v("，交给异步处理模块，同样直接加入宏任务队列。")]),t._v(" "),a("li",[t._v("遇到微任务"),a("code",[t._v("then()-log(4)")]),t._v("，加入微任务队列。")]),t._v(" "),a("li",[t._v("最后遇到打印语句，直接"),a("strong",[t._v("打印5")]),t._v("。")]),t._v(" "),a("li",[t._v("执行栈空")])]),t._v(" "),a("p",[t._v("画出当前任务队列的情况：")]),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530141123220.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",width:"60%"}}),t._v(" "),a("p",[a("strong",[t._v("第二轮循环")])]),t._v(" "),a("ol",[a("li",[t._v("执行栈空后，读取微任务队列，执行"),a("code",[t._v("then()-log(4)")]),t._v("，"),a("strong",[t._v("打印4")]),t._v("，微任务队列为null；")])]),t._v(" "),a("p",[t._v("画出此刻任务队列的情况：")]),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530141147103.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",width:"60%"}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("微任务队列为空，读取宏任务队列的最靠前的任务"),a("code",[t._v("setTimeout-log(1)")]),t._v(";；")]),t._v(" "),a("li",[a("strong",[t._v("打印1")]),t._v("，又遇到微任务"),a("code",[t._v("then()-log(2)")]),t._v("，加入微任务队列。第二轮循环结束。")])]),t._v(" "),a("p",[t._v("画出当前任务队列的情况：")]),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530141214426.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70",width:"60%"}}),t._v(" "),a("p",[a("strong",[t._v("第三轮循环")])]),t._v(" "),a("ol",[a("li",[t._v("读取微任务队列："),a("code",[t._v("then()-log(2)")]),t._v("，"),a("strong",[t._v("打印2")]),t._v("，微任务队列为null")]),t._v(" "),a("li",[t._v("读取宏任务队列首个任务："),a("code",[t._v("setTimeout()-log(3)")]),t._v("，"),a("strong",[t._v("打印3")])])]),t._v(" "),a("p",[t._v("至此，异步任务队列也被清空，整个任务执行完毕")]),t._v(" "),a("p",[a("strong",[t._v("最终结果：5，4，1，2，3")])]),t._v(" "),a("h2",{attrs:{id:"五、写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、写在最后"}},[t._v("#")]),t._v(" 五、写在最后")]),t._v(" "),a("p",[t._v("尝试走进浏览器的大门，你会对自己天天要调试的页面（浏览器）变得越来越亲切，也许有一天你会深耕在浏览器领域，希望而这一切的起因都是因为这个浏览器系列，来自"),a("a",{attrs:{href:"https://webbj97.github.io/summary/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《余光前端笔记》"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_5-1-本文参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-本文参考"}},[t._v("#")]),t._v(" 5.1 本文参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 运行机制详解：再谈Event Loop"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/lin_credible/article/details/40143961",target:"_blank",rel:"noopener noreferrer"}},[t._v("【朴灵评注】JavaScript 运行机制详解：再谈Event Loop"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://muyiy.cn/question/browser/25.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("木易杨：说说浏览器事件循环"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_5-2-关于我"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-关于我"}},[t._v("#")]),t._v(" 5.2 关于我")]),t._v(" "),a("ul",[a("li",[t._v("花名：余光")]),t._v(" "),a("li",[t._v("WX：j565017805")]),t._v(" "),a("li",[t._v("邮箱：webbj97@163.com")])]),t._v(" "),a("h3",{attrs:{id:"_5-3-其他沉淀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-其他沉淀"}},[t._v("#")]),t._v(" 5.3 其他沉淀")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://webbj97.github.io/leetCode-Js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github: Js 版 LeetCode 题解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://webbj97.github.io/summary/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端进阶笔记"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://yuguang.blog.csdn.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSDN 博客汇总"),a("OutboundLink")],1)])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/hlg-ui/1607504321645897/yuguang-vue-bottom.gif",width:"100%"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);