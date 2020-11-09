学习笔记
1.BFS(breadth-first-search)广度优先遍历
  逐层遍历。队列。在搜索完第k层的节点之前，是不会搜索第k+1层的节点的。
2.DFS(depth-first-search)深度优先遍历
  递归遍历。栈。尽可能深的搜索每个树枝，一直搜索到最深的那一个为止。
3.BFS的伪代码
  if(condition) queue.push(node);
  while(queue.length){
    if(node == target) return target; 
  }
4.push+shift （unshift+pop）模拟队列
5.启发式寻路 A -> A* 
  对于存储要寻找的路径节点队列queue的存取操作进行优化 sort每次取距离目标的最近节点
6.二叉堆
https://www.jianshu.com/p/6d3a12fe2d04
7.ES5的类和ES6的类的区别
https://www.jianshu.com/p/edf4d665d0df
ES5：
  通过prototype实现继承;
  prototype上的方法就是可枚举的;
ES6：
  直接使用类似于构造函数的语法糖声明类;
  prototype对象的constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的;
  constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必   须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象;

  类的内部所有定义的方法，都是不可枚举的（non-enumerable）;
  类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面;
  Object.assign方法可以很方便地一次向类添加多个方法;
  类不存在变量提升（hoist），这一点与 ES5 完全不同;

