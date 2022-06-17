# CSS

## 盒模型

盒模型由四个部分组成，分别是margin,border,padding,content

标准盒模型的width和height属性的范围只包含了content

IE盒模型的width和height的属性的范围包含了border，padding和content

## 选择器

* id选择器（#myid)
* 类选择器（.myclassname)
* 标签选择器（div,h1,p）
* 后代选择器（h1 p）
* 相邻后代选择器（子）选择器（ul>li)
* 兄弟选择器（li～a）
* 相邻兄弟选择器（li+a）
* 属性选择器（a[rel='external']）
* 伪类选择器（a:hover, li:nth-child)
* 伪元素选择器（::before, ::after)
* 通配符选择器（*）

## 伪类和伪元素的区别

伪类用于当已有的元素处于某个状态时，为其添加对应的样式
伪元素用于创建一些不在文档树中的元素，并为其添加样式

## BFC
块级格式化上下文（Block Fromatting Context,BFC），是一个独立的布局环境，内部和外部互不影响

创建BFC
* 根元素或包含根元素的元素
* 浮动元素float=left|right或inherit(!= none)
* 绝对定位元素position=absolute或fixed
* display=inline-block|flex|inline-flex|table-cell|tabel-caption
* overflow=hidden|auto|scroll(!=visible)

## 浮动