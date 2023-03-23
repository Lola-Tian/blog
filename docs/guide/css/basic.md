---
title: 'css选择器'
sidebar: auto
tags:
 - 
---
##  css选择器介绍

### 1、类别选择器

类选择器根据类名来选择，前面以“.”来标志。

声明如下：
  ```
.demo{
   color:#FF0000;
}
  ```
### 2、标签选择器

一个完整的HTML页面是由很多不同的标签组成，而标签选择器，则是决定哪些标签采用相应的CSS样式。

声明如下：
```
p{
  font-size:12px;
  background:#FF0000;
}
```
### 3、ID选择器

ID 选择器可以为标有特定 ID 的 HTML 元素指定特定的样式。 根据元素ID来选择元素，具有唯一性，这意味着同一id在同一文档页面中只能出现一次。

前面以”#”号来标志，在样式里声明如下：
```
#demo{
  color:#FF0000;
}
```
### 4、后代选择器

后代选择器也称为包含选择器，用来选择特定元素或元素组的后代，将对父元素的选择放在前面，对子元素的选择放在后面，中间加一个空格分开。

声明如下:
```
.father .child{
  color:#0000CC;
}
```
### 5、子选择器

请注意这个选择器与后代选择器的区别，子选择器仅是指它的直接后代，或者作用于子元素的第一个后代。而后代选择器是作用于所有子后代元素。后代选择器通过空格来进行选择，而子选择器是通过“>”进行选择。

声明如下:
```
#links > a {
  color:blue;
}
```
### 6、伪类选择器

声明如下:
```
/* 未访问的链接 */
a:link {
  color: #FF0000;
}

/* 已访问的链接 */
a:visited {
  color: #00FF00;
}

/* 鼠标悬停链接 */
a:hover {
  color: #FF00FF;
}

/* 已选择的链接 */
a:active {
  color: #0000FF;
}
```
| 选择器                                                       | 例子                  | 例子描述                                                     |
| ------------------------------------------------------------ | --------------------- | ------------------------------------------------------------ |
| [:active](https://www.w3school.com.cn/cssref/selector_active.asp) | a:active              | 选择活动的链接。                                             |
| [:checked](https://www.w3school.com.cn/cssref/selector_checked.asp) | input:checked         | 选择每个被选中的input元素。                              |
| [:disabled](https://www.w3school.com.cn/cssref/selector_disabled.asp) | input:disabled        | 选择每个被禁用的input元素。                              |
| [:empty](https://www.w3school.com.cn/cssref/selector_empty.asp) | p:empty               | 选择没有子元素的每个p元素。                              |
| [:enabled](https://www.w3school.com.cn/cssref/selector_enabled.asp) | input:enabled         | 选择每个已启用的input元素。                              |
| [:first-child](https://www.w3school.com.cn/cssref/selector_first-child.asp) | p:first-child         | 选择作为其父的首个子元素的每个p元素。                    |
| [:first-of-type](https://www.w3school.com.cn/cssref/selector_first-of-type.asp) | p:first-of-type       | 选择作为其父的首个p元素的每个p元素。                 |
| [:focus](https://www.w3school.com.cn/cssref/selector_focus.asp) | input:focus           | 选择获得焦点的input元素。                                |
| [:hover](https://www.w3school.com.cn/cssref/selector_hover.asp) | a:hover               | 选择鼠标悬停其上的链接。                                     |
| [:in-range](https://www.w3school.com.cn/cssref/selector_in-range.asp) | input:in-range        | 选择具有指定范围内的值的input元素。                      |
| [:invalid](https://www.w3school.com.cn/cssref/selector_invalid.asp) | input:invalid         | 选择所有具有无效值的input元素。                          |
| [:lang(*language*)](https://www.w3school.com.cn/cssref/selector_lang.asp) | p:lang(it)            | 选择每个lang属性值以 "it" 开头的p元素。                |
| [:last-child](https://www.w3school.com.cn/cssref/selector_last-child.asp) | p:last-child          | 选择作为其父的最后一个子元素的每个p元素。                |
| [:last-of-type](https://www.w3school.com.cn/cssref/selector_last-of-type.asp) | p:last-of-type        | 选择作为其父的最后一个 p元素的每个p元素。             |
| [:link](https://www.w3school.com.cn/cssref/selector_link.asp) | a:link                | 选择所有未被访问的链接。                                     |
| [:not(*selector*)](https://www.w3school.com.cn/cssref/selector_not.asp) | :not(p)               | 选择每个非p元素的元素。                                  |
| [:nth-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-child.asp) | p:nth-child(2)        | 选择作为其父的第二个子元素的每个p元素。                  |
| [:nth-last-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-child.asp) | p:nth-last-child(2)   | 选择作为父的第二个子元素的每个p元素，从最后一个子元素计数。 |
| [:nth-last-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-of-type.asp) | p:nth-last-of-type(2) | 选择作为父的第二个p元素的每个p元素，从最后一个子元素计数 |
| [:nth-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-of-type.asp) | p:nth-of-type(2)      | 选择作为其父的第二个 p元素的每个p元素。               |
| [:only-of-type](https://www.w3school.com.cn/cssref/selector_only-of-type.asp) | p:only-of-type        | 选择作为其父的唯一p元素的每个p元素。                 |
| [:only-child](https://www.w3school.com.cn/cssref/selector_only-child.asp) | p:only-child          | 选择作为其父的唯一子元素的p元素。                        |
| [:optional](https://www.w3school.com.cn/cssref/selector_optional.asp) | input:optional        | 选择不带 "required" 属性的 input 元素。                    |
| [:out-of-range](https://www.w3school.com.cn/cssref/selector_out-of-range.asp) | input:out-of-range    | 选择值在指定范围之外的 input 元素。                        |
| [:read-only](https://www.w3school.com.cn/cssref/selector_read-only.asp) | input:read-only       | 选择指定了 "readonly" 属性的 input元素。                  |
| [:read-write](https://www.w3school.com.cn/cssref/selector_read-write.asp) | input:read-write      | 选择不带 "readonly" 属性的 input元素。                    |
| [:required](https://www.w3school.com.cn/cssref/selector_required.asp) | input:required        | 选择指定了 "required" 属性的 input元素。                  |
| [:root](https://www.w3school.com.cn/cssref/selector_root.asp) | root                  | 选择元素的根元素。                                           |
| [:target](https://www.w3school.com.cn/cssref/selector_target.asp) | #news:target          | 选择当前活动的 #news 元素（单击包含该锚名称的 URL）。        |
| [:valid](https://www.w3school.com.cn/cssref/selector_valid.asp) | input:valid           | 选择所有具有有效值的input元素。                          |
| [:visited](https://www.w3school.com.cn/cssref/selector_visited.asp) | a:visited             | 选择所有已访问的链接。                                       |



### 7、通用选择器

通用选择器用*来表示。

声明如下:
```
*{
  font-size: 12px;
}
```
表示所有的元素的字体大小都是12px。

### 8、群组选择器

当几个元素样式属性一样时，可以共同调用一个声明，元素之间用逗号分隔。

声明如下:
```
p, td, li {
  line-height:20px;
  color:#c00;
}
#main p, #sider span {
  color:#000;
  line-height:26px;
}
.#main p span {
  color:#f60;
}
.text1 h1,#sider h3,.art_title h2 {
  font-weight:100;
}
```
使用群组选择器，会大大的简化CSS代码

### 9、相邻同胞选择器

以“+”隔开相邻关系的元素 

声明如下:
```
p + a {
  color:blue;
}
```
### 10、属性选择器
[] ([type=text]修饰属性为type=text的模块) 

声明如下:
```
html

<div>
  <p>1</p>
  <input type="text">
</div>

css

[type=text]{
  margin:0 10px;
}
```

### 11、伪元素选择器

CSS 伪元素用于设置元素指定部分的样式。

可用于：设置元素的首字母、首行的样式
在元素的内容之前或之后插入内容 

声明如下:
```
selector::pseudo-element {
  property: value;
}
```
| 选择器                                                       | 例子            | 例子描述                      |
| ------------------------------------------------------------ | --------------- | ----------------------------- |
| [::after](https://www.w3school.com.cn/cssref/selector_after.asp) | p::after        | 在每个 p 元素之后插入内容。 |
| [::before](https://www.w3school.com.cn/cssref/selector_before.asp) | p::before       | 在每个 p 元素之前插入内容。 |
| [::first-letter](https://www.w3school.com.cn/cssref/selector_first-letter.asp) | p::first-letter | 选择每个 p 元素的首字母。   |
| [::first-line](https://www.w3school.com.cn/cssref/selector_first-line.asp) | p::first-line   | 选择每个 p元素的首行。     |
| [::selection](https://www.w3school.com.cn/cssref/selector_selection.asp) | p::selection    | 选择用户选择的元素部分。      |

