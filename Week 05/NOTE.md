1.基本拖动原理
  mousedown 记录初始位置
            绑定mousemove事件：移动时根据鼠标位置动态叠加初始位置。
            绑定mouseup事件：解除所有绑定事件，重新记录初始位置。
2.基础相关API了解
createRange()
insertNode()
getBoundingRect()
事件selectStart