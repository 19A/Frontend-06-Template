类型转换(type convertion)
  Number -> Object  boxing
  String -> Object  boxing
  Boolean -> Object boxing
  Object -> Number  valueOf
  Object -> String  valueOf + toString
  Object -> Boolean  true
  unboxing： toPrimitive / toString-valueOf /Symbol.toPrimitive
    var o = { toString(){return '2'}
                valueOf(){return 1}
                [Symbol.toPrimitive(){return 3}]
    }
  boxing：new Number(2)/new String('a')/new Boolean(true)/
          new Object(new Symbol('a'))

运行时相关
  Completion Record：
    type: normal/break/continue/return/throw...
    value:基本类型
    target:label
  
简单语句
  ExpressionStatement（核心）
  EmptyStatement
  Debugger
  Throw
  Continue
  Break
  Return
复合语句
  BlockStatement ({   })
  If
  Switch
  Iteration(while /for in/of/awiat )
  With
  Labelled
  TryState(try-catch-finally 区别于block) 注意：return不能打破try catch的执行