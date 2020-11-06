学习笔记

### Proxy 

Proxy 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。

### dragable 

监听被拖拽对象的 mousedown 事件，在此事件触发时，再在 document 上注册 mousemove 和 mouseup 事件。这个过程注册的 mouseup 回调调用的时候删除响应 mouseup 和 mousemove 的回调函数。

### Reflect 

##### 语义

Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与处理器对象的方法相同。Reflect不是一个函数对象，因此它是不可构造的。 

##### 描述

与大多数全局对象不同，Reflect没有构造函数。你不能将其与一个new运算符一起使用，或者将Reflect对象作为一个函数来调用。Reflect的所有属性和方法都是静态的（就像Math对象）。

##### 方法

##### Reflect.apply()

静态方法 Reflect.apply() 通过指定的参数列表发起对目标(target)函数的调用。 

##### Reflect.construct()

Reflect.construct() 方法的行为有点像 new 操作符 构造函数 ， 相当于运行 new target(...args)。

##### Reflect.defineProperty()

Reflect.defineProperty()是一个静态的方法，看起来像 Object.defineProperty() 但是它返回一个布尔值 。

##### Reflect.deleteProperty() 

静态方法 Reflect.deleteProperty() 允许用于删除属性。它很像 delete operator ，但它是一个函数。 Reflect.deleteProperty 允许你删除一个对象上的属性。返回一个 Boolean 值表示该属性是否被成功删除。它几乎与非严格的 delete operator 相同。 

##### Reflect.get()

Reflect.get() 方法的工作方式，就像从 object (target[propertyKey]) 中获取属性，但它是作为一个函数执行的。 

##### **Reflect.getOwnPropertyDescriptor()** 

静态方法 Reflect.getOwnPropertyDescriptor() 与 Object.getOwnPropertyDescriptor() 方法相似。如果在对象中存在，则返回给定的属性的属性描述符。否则返回 undefined。 

##### **Reflect.getPrototypeOf()**

 静态方法 Reflect.getPrototypeOf() 与 Object.getPrototypeOf() 方法是一样的。都是返回指定对象的原型（即，内部的 [[Prototype]] 属性的值）。 

**Reflect.has()**

**Reflect.has()** 静态方法 Reflect.has() 作用与 in 操作符 相同。 

**Reflect.isExtensible()** 

静态方法 Reflect.isExtensible() 判断一个对象是否可扩展 （即是否能够添加新的属性）。与它 Object.isExtensible() 方法相似，但有一些不同，详情可见 differences。 

**Reflect.ownKeys()** 

静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组。 

**Reflect.preventExtensions()** 静态方法 Reflect.preventExtensions() 方法阻止新属性添加到对象 例如：防止将来对对象的扩展被添加到对象中)。该方法与 Object.preventExtensions()相似，但有一些不同点。 

**Reflect.set()** 

静态方法 Reflect.set() 工作方式就像在一个对象上设置一个属性。 

**Reflect.setPrototypeOf()** 

静态方法 Reflect.setPrototypeOf() 与 Object.setPrototypeOf() 方法是一致的。它将指定对象的原型 （即，内部的[[Prototype]] 属性）设置为另一个对象或为 null。 