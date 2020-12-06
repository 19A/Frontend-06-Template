1.基本拖动原理
  mousedown 记录初始位置
            绑定mousemove事件：移动时根据鼠标位置动态叠加初始位置。
            绑定mouseup事件：解除所有绑定事件，重新记录初始位置。
2.基础相关API了解
range常见使用 : 
  var range = document.createRange(); //创建实例
  range.setStart(node,startOffset);   //选择范围的始终点
  range.setEnd(node,endOffset);       //范围为参考节点的范围
  range.selectNodeContents(referenceNode);  //不包含指定节点自身。  
    //两者区别：https://blog.csdn.net/yana_loo/article/details/51487412
  range.insertNode(newNode);          //新节点是插入在 the Range起始位置。
    //https://www.w3school.com.cn/xmldom/met_range_insertnode.asp
getBoundingRect() 这个方法返回一个矩形对象，包含四个属性：left、top、right和buttom。分别表示元素各边与页面各边的距离
3.事件selectStart
描述：几乎可以用于所有对象，其触发时间为目标对象被开始选中时（即选中动作刚开始，尚未实质性被选中）。
应用：禁止用户选中网页上的内容
  document.onselectstart =function(){return false;}
  //注意：原生js事件名小写。。
4.查询纯文本形式的元素内容，或者在文档中插入纯文本。标准的方法是用Node的textContent属性来实现 https://blog.csdn.net/gtLBTNq9mr3/article/details/79589121

5.Proxy对象
 var _proxy = new Proxy(target, hander);
