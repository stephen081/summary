(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{444:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript基础-九-基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript基础-九-基本数据类型"}},[t._v("#")]),t._v(" JavaScript基础（九）基本数据类型")]),t._v(" "),a("blockquote",[a("p",[t._v("在上一篇"),a("a",{attrs:{href:""}},[t._v("JavaScript中的参数传递")]),t._v("一文中，我们了解到了值传递、引用传递、共享传递，三种传递的第一层区别就在于传入参数的数据类型不同，所以这次，我们来讲讲Js中的数据类型。\n本篇文章是根据《你不知道的Js》第一部分延伸扩展出来的。一个较基础的问题，它很适合放在整个面试的前几问，面试官会根据你的回答确定之后问题的走向，比如当你回答基本数据类型时少回答了一个"),a("code",[t._v("String")]),t._v("，那么面试官很可能就会问你"),a("code",[t._v("String都有哪些方法哦～")])])]),t._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1"}},[t._v("一、类型")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#2"}},[t._v("二、数据类型分类")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3"}},[t._v("三、常见问题")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#4"}},[t._v("写在最后")])])]),t._v(" "),a("h2",{attrs:{id:"1"}},[t._v("一、类型")]),t._v(" "),a("p",[t._v("可能许多习惯了C++、C#这类静态语言（强类型）语言的小伙伴们在编写Js代码时，会很不习惯，因为相对于静态语言来说，Js甚至没有类型的”概念“。")]),t._v(" "),a("p",[t._v("而且Js中吐槽较多的恰恰就包含类型转换，在我们日常写代码时总是遇到或显示或隐示的类型转换，比如：")]),t._v(" "),a("p",[t._v("你要获取数字"),a("code",[t._v("123")]),t._v("的个位十位百位，你会怎么做？")]),t._v(" "),a("ul",[a("li",[t._v("toSrting()后通过下标获取？")]),t._v(" "),a("li",[t._v("取整取余？")])]),t._v(" "),a("p",[t._v("使用类型转换形式多样。有些方式简明易懂，也很安全，然而稍不留神，就会出现意想不到的结果。")]),t._v(" "),a("p",[t._v("为了学习和掌握类型转换，现在先让我们来深入了解一下值和类型。")]),t._v(" "),a("h4",{attrs:{id:"内置类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置类型"}},[t._v("#")]),t._v(" 内置类型")]),t._v(" "),a("p",[t._v("JavaScript 拥有"),a("strong",[t._v("动态类型")]),t._v("，这意味着相同的变量可用作不同的类型：类型是值的内部特征，它定义了值的行为，以使其区别于其他值。")]),t._v(" "),a("p",[a("strong",[t._v("JavaScript中的内置类型:")])]),t._v(" "),a("ul",[a("li",[t._v("null")]),t._v(" "),a("li",[t._v("undefined")]),t._v(" "),a("li",[t._v("布尔值（boolean）")]),t._v(" "),a("li",[t._v("数字（number）")]),t._v(" "),a("li",[t._v("字符串（string）")]),t._v(" "),a("li",[t._v("对象（Object）")]),t._v(" "),a("li",[t._v("symbol（ES6新增）")])]),t._v(" "),a("p",[t._v("对于null和undefined大家一定不陌生，我们会在第三节简单的分析他们之前的区别。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200707141653286.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"2"}},[t._v("二、数据类型分类")]),t._v(" "),a("p",[t._v("除了"),a("strong",[t._v("对象")]),t._v("，其他几个都是"),a("strong",[t._v("基本类型")]),t._v("，这是因为声明变量时不同的内存分配而决定的：")]),t._v(" "),a("h4",{attrs:{id:"_2-1-基本类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-基本类型"}},[t._v("#")]),t._v(" 2.1 基本类型")]),t._v(" "),a("p",[t._v("JavaScript 中共有 6 种基本数据类型："),a("code",[t._v("Undefined")]),t._v("、"),a("code",[t._v("Null")]),t._v("、"),a("code",[t._v("Boolean")]),t._v("、"),a("code",[t._v("Number")]),t._v("、"),a("code",[t._v("String")]),t._v("、"),a("code",[t._v("Symbol")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("基本类型")]),t._v("存储在"),a("code",[t._v("栈（stack）中")]),t._v("，也就是说：")]),t._v(" "),a("ul",[a("li",[t._v("它们的值"),a("strong",[t._v("直接存储在变量访问的位置")]),t._v("。")]),t._v(" "),a("li",[t._v("这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 – "),a("code",[t._v("栈")]),t._v("中。")]),t._v(" "),a("li",[t._v("这样存储便于迅速查寻变量的值。")]),t._v(" "),a("li",[t._v("基本类型的值是按值访问的，且基本类型的值是不可变的。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123hello321"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123HELLO321")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123hello321")]),t._v("\n")])])]),a("p",[a("strong",[t._v("基本类型的比较是它们的值的比较：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// == 只进行值的比较")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// === 不仅进行值得比较，还要进行数据类型的比较")]),t._v("\n")])])]),a("p",[t._v("有关符号运算，优先级的问题，我觉得应该将它放在Js专题系列，单独讨论它们才能比较透彻，这里就不过多解释了。")]),t._v(" "),a("p",[t._v("来看下面的代码，我们用图示来分析它")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'字符串'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200707105321216.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_2-2-引用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-引用类型"}},[t._v("#")]),t._v(" 2.2 引用类型")]),t._v(" "),a("p",[a("code",[t._v("引用类型")]),t._v("存储在"),a("code",[t._v("堆（heap）")]),t._v("中的对象，也就是说:")]),t._v(" "),a("ul",[a("li",[t._v("存储在变量处的值是一个指针（point），指向存储对象的内存地址。")]),t._v(" "),a("li",[t._v("引用类型的值是按引用访问的，且引用类型的值是"),a("code",[t._v("可变")]),t._v("的。")]),t._v(" "),a("li",[t._v("变量存储的是可以打开保存数据的房间的"),a("code",[t._v("钥匙")])]),t._v(" "),a("li",[a("code",[t._v("存储钥匙地址")]),t._v("的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。")])]),t._v(" "),a("p",[t._v("除过上面的 6 种基本数据类型外，剩下的就是引用类型了，统称为 Object 类型。细分的话，有：")]),t._v(" "),a("ul",[a("li",[t._v("Object")]),t._v(" "),a("li",[t._v("Array")]),t._v(" "),a("li",[t._v("Date")]),t._v(" "),a("li",[t._v("RegExp")]),t._v(" "),a("li",[t._v("Function")]),t._v(" "),a("li",[t._v("...")])]),t._v(" "),a("p",[a("strong",[t._v("引用类型的比较是引用的比较：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建一个空对象 obj1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建一个空对象 obj2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("p",[t._v("因为 obj1 和 obj2 分别引用的是存放在堆内存中的2个不同的对象，故变量 obj1 和 obj2 的值（引用地址）也是不一样的！")]),t._v(" "),a("p",[t._v("来看下面的代码，我们用图示来分析它")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'余光'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yuguang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'余光'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200707114641540.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_2-3-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-小结"}},[t._v("#")]),t._v(" 2.3 小结")]),t._v(" "),a("p",[a("strong",[t._v("基本类型")])]),t._v(" "),a("ul",[a("li",[t._v("栈内存中包括了变量的标识符和变量的值")])]),t._v(" "),a("p",[a("strong",[t._v("引用类型")])]),t._v(" "),a("ul",[a("li",[t._v("栈内存中保存了变量标识符和指向堆内存中该对象的指针")]),t._v(" "),a("li",[t._v("堆内存中保存了对象的内容")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200707141806752.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"3"}},[t._v("三、常见问题")]),t._v(" "),a("h4",{attrs:{id:"_3-1-javascript中的变量是没有类型的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-javascript中的变量是没有类型的"}},[t._v("#")]),t._v(" 3.1 JavaScript中的变量是没有类型的")]),t._v(" "),a("p",[t._v("来看下面的例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 严格地说 变量a没有类型，它所保存的 100是数字类型的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其实检测是=>typeof 100")]),t._v("\n\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[a("code",[t._v("变量a")]),t._v("可以随时持有任何类型的"),a("code",[t._v("值")]),t._v("。换个角度来理解就是，JavaScript不做“类型强制”；也就是说，语言引擎不要求变量总是持有与其初始值同类型的值。")]),t._v(" "),a("h4",{attrs:{id:"_3-2-typeof检测不总是对的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-typeof检测不总是对的"}},[t._v("#")]),t._v(" 3.2 typeof检测不总是对的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200706185843137.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("需要注意的点：")]),t._v(" "),a("p",[a("strong",[t._v("number")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基本数学API和属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LN2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true  Math的属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true 无穷")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true 特殊的数字类型，not a number")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被强转称数字的其他数据类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'str'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Number('str') => NaN => number")]),t._v("\n")])])]),a("p",[a("strong",[t._v("string")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// typeof always returns a string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 强转成字符串")]),t._v("\n")])])]),a("p",[a("strong",[t._v("布尔值")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boolean'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 强制类型转换")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boolean'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// two calls of the ! (logical NOT) operator are equivalent to Boolean()")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Symble")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),t._v("\n")])])]),a("p",[a("strong",[t._v("undefined")])]),t._v(" "),a("p",[t._v("一个没有被赋值的变量的数据类型是"),a("code",[t._v("undefined")]),t._v("(如果方法或者是语句中操作的变量没有被赋值，则会返回undefined) —— MDN")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("object")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'余光'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("null")])]),t._v(" "),a("p",[t._v("值得我们注意恰恰是这个"),a("code",[t._v("null")]),t._v(",typeof 对它的处理返回的是"),a("code",[t._v("object")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[a("strong",[t._v("function")])]),t._v(" "),a("p",[t._v("typeof检测函数返回的也是object，这是因为从规范上看"),a("code",[t._v("function")]),t._v("实际上是"),a("code",[t._v("object")]),t._v("的一个子类型。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Functions")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("那么你还知道其他检测数据类型的方式吗？")]),t._v(" "),a("h4",{attrs:{id:"_3-3-null和undefined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-null和undefined"}},[t._v("#")]),t._v(" 3.3 null和undefined")]),t._v(" "),a("ul",[a("li",[t._v("null：特指对象的值未设置。它是 "),a("code",[t._v("JavaScript 基本类型")]),t._v(" 之一。\n"),a("ul",[a("li",[t._v("它不是全局对象的一个属性;")]),t._v(" "),a("li",[t._v("在 API 中，null 常在返回类型应是一个对象，但没有关联的值的地方使用。")])])]),t._v(" "),a("li",[t._v("undefined：表示声明但未被赋值的变量类型\n"),a("ul",[a("li",[t._v("你可以使用"),a("code",[t._v("undefined")]),t._v("和严格相等或不相等操作符来决定一个变量是否拥有值。")])])])]),t._v(" "),a("p",[a("strong",[t._v("他们的区别：")])]),t._v(" "),a("p",[t._v("当检测 null 或 undefined 时，注意相等 "),a("code",[t._v("==")]),t._v("与"),a("code",[t._v("===")]),t._v("两个操作符的区别 ，前者会执行类型转换：")]),t._v(" "),a("ul",[a("li",[t._v("typeof检测时两者的返回值不同")]),t._v(" "),a("li",[t._v("代表的含义不同")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"object\" (因为一些以前的原因而不是'null')")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "undefined"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h2",{attrs:{id:"4"}},[t._v("写在最后")]),t._v(" "),a("blockquote",[a("p",[t._v("目前，前端内功系列已经是第九篇了，虚心接受大家的批评和指正，如果能对您有帮助，希望您关注、收藏、点赞一波哦～")])]),t._v(" "),a("p",[a("strong",[t._v("JavaScript内功系列：")])]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/jbj6568839z/article/details/106479511",target:"_blank",rel:"noopener noreferrer"}},[t._v("this、call、apply详解，系列（一）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/jbj6568839z/article/details/106555301",target:"_blank",rel:"noopener noreferrer"}},[t._v("从原型到原型链，系列（二）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/jbj6568839z/article/details/106618708",target:"_blank",rel:"noopener noreferrer"}},[t._v("从作用域到作用域链，系列（三）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/jbj6568839z/article/details/106668345",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript中的执行上下文（四）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/jbj6568839z/article/details/106793254",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript中的变量对象（五)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/jbj6568839z/article/details/106824296",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript之自执行函数表达式（六）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/jbj6568839z/article/details/106940646",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript中的闭包，给自己一场重生（七）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/jbj6568839z/article/details/107111529",target:"_blank",rel:"noopener noreferrer"}},[t._v("参数传递(求值策略)（八）"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("本文")]),t._v(" "),a("li",[t._v("你真的了解Js吗？（上）")])]),t._v(" "),a("p",[a("strong",[t._v("关于我")])]),t._v(" "),a("ul",[a("li",[t._v("花名：余光")]),t._v(" "),a("li",[t._v("WX：j565017805")]),t._v(" "),a("li",[t._v("沉迷JS，水平有限，虚心学习中")])]),t._v(" "),a("p",[a("strong",[t._v("其他沉淀")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://webbj97.github.io/leetCode-Js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript版LeetCode题解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://webbj97.github.io/summary/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端进阶笔记"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://yuguang.blog.csdn.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSDN"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("如果您看到了最后，不妨收藏、点赞、评论一下吧！！！\n持续更新，您的三连就是我最大的动力，虚心接受大佬们的批评和指点，共勉！")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200602155947301.png",width:"60%"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);