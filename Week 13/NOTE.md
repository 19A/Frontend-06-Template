学习笔记
语义 strong/em：前者强调重要性，后者强调语气。
## DOM API
 ### 节点类Node
  1.Element
    a.HTMLElement
    b.SVGElement
  2.Document
  3.CharacterData
  4.DocumentFragment
  5.DocumentType
  #### 导航类操作
    节点 元素
    parentNode        parentElement
    childNodes        children
    firstChild        firstElementChild
    lastChild         lastElementChild
    nextSibling       nextElementSibling
    previousSibling   previousElementSibling
  #### 修改操作
    appendChild       insertBefore  
    （10个子节点 11个空位 appendChild插入最后一个，无需实现insertAfter）
    removeChild       replaceChild
  #### 高级操作
    compareDocumentPosition是一个用于比较两个节点中关系的函数
    contains检查一个节点是否包含另一个节点的函数
    isEqualNode检查两个节点是否完全相同
    isSameNode检查两个节点是否是同一个节点，实际上在Javascript中可以用"==="。
    cloneNode复制一个节点，如果传入参数true，则会连同子元素做深拷贝。
### 事件API
  Event：冒泡和捕获
    浏览器对绑定事件处理的机制，先从顶级对象向内捕获计算出事件触发的元素位置，在逐级冒泡到顶级对象。
  target.AddEventListener(type,listener[,options])
  options:  passive(移动端默认为false，需要设置为true，提高性能，阻止默认行为)
### Range API
  eg:如何对某元素节点的子元素进行逆序
  考察知识点：所有的 DOM 元素，都只能有一个父元素，它不能被两次插入到DOM 树中
             DocumentFragment的操作不会导致重排
  var range = new Range();
  range.setStart(element,9);
  range.setEnd(element,4);
  var range = document.getSelection().getRangeAt(0);
  range.setStartBefore
  range.setStartAfter
  range.setEndBefore
  range.setEndAfter
  range.selectNode
  range.selectNodeContents
  var fragment = range.extractContent();
     从dom树上取出，取出的node类型为fragment
  range.insertNode(document.createTextNode('aaa')); 添加

      