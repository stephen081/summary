# 深浅拷贝

## 数组的浅拷贝

如果是数组，我们可以利用数组的一些方法比如：slice、concat 返回一个新数组的特性来实现拷贝。

比如：concat
```js
var arr = ['old', 1, true, null, undefined];

var new_arr = arr.concat();

new_arr[0] = 'new';

console.log(arr) // ["old", 1, true, null, undefined]
console.log(new_arr) // ["new", 1, true, null, undefined]

```

slice同样的道理
```js
var new_arr = arr.slice();
```

**但是如果数组嵌套了对象或者数组的话**，比如：

```js
var arr = [{name: "11"}, ["name"]];

var newArr = arr.concat();

arr[0].name = "你好";
arr[1][0] = "你好";
console.log(arr, "旧");// [ { name: '你好' }, [ '你好' ] ] '旧改'
console.log(newArr, "新");// [ { name: '你好' }, [ '你好' ] ] '新改'
```js

我们会发现，无论是新数组还是旧数组都发生了变化，也就是说使用 concat 方法，克隆的并不彻底。

如果数组元素是基本类型，就会拷贝一份，互不影响，而如果是对象或者数组，就会只拷贝对象和数组的引用，这样我们无论在新旧数组进行了修改，两者都会发生变化。

我们把这种复制引用的拷贝方法称之为浅拷贝，与之对应的就是深拷贝，深拷贝就是指完全的拷贝一个对象，即使嵌套了对象，两者也相互分离，修改一个对象的属性，也不会影响另一个。

所以我们可以看出使用 concat 和 slice 是一种浅拷贝。

## 数组的深拷贝

那如何深拷贝一个数组呢？这里介绍一个技巧，不仅适用于数组还适用于对象！那就是：
```js
var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]

var new_arr = JSON.parse( JSON.stringify(arr) );

console.log(new_arr);
```

是一个简单粗暴的好方法，就是有一个问题，不能拷贝函数，我们做个试验：

```js
var arr = [function(){
    console.log(a)
}, {
    b: function(){
        console.log(b)
    }
}]
var new_arr = JSON.parse(JSON.stringify(arr));

console.log(new_arr); // [ null , {} ] 
```

我们可以通过API实现了深浅拷贝，那么我们如果自己实现以上的功能呢？

##
