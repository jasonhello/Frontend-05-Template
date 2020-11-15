学习笔记

## 四则运算BNF

```
<MultiplicativeExpression>::=<Number>|
    <MultiplicativeExpression>"*"<Number>|
    <MultiplicativeExpression>"/"<Number>|
<AddtiveExpression>::=<MultiplicativeExpression>|
    <AddtiveExpression>"+"<MultiplicativeExpression>|
    <AddtiveExpression>"-"<MultiplicativeExpression>|
("("<AddtiveExpression>")")+

```

## 

## 对象

```
面向对象基本特性
对象
对象状态
对象的行为

设计原则
对象的行为---改变--->对象的状态
```

## 语言分类

- 非形式语言：中文、英文等。
- 形式语言（例如：乔姆斯基谱系），乔姆斯基谱系是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。它包括四个层次： (1)0型文法：无限制文法或短语结构文法，包含以下三种文法； (2)1型文法：上下文相关文法，生成上下文相关语言，包含以下两种文法； (3)2型文法：上下文无关文法，生成上下文无关语言，包含以下一种文法； (4)3型文法：正规文法，生成正则语言。
- 形式语言按照用途来分类： (1)数据描述语言：JSON、HTML、XAML、SQL、CSS； (2)编程预语言：C、C++、Java、C#、Python、Ruby、Perl、Lisp、T-SQL、Clojure、Haskell、JavaScript。
- 形式语言按照表达方式来分类： (1)声明式语言：JSON、HTML、XAML、SQL、CSS、Lisp、Clojure、Haskell； (2)命令型语言：C、C++、Java、C#、Python、Ruby、Perl、JavaScript。



## js类型

- Number:IEEE754 float表示方法
- String:ASCII、Unicode字符集、UTF编码方式
- Boolean：true false
- Null
- undefined：用void(0)代替undefined进行undefined赋值
- object
- symbol