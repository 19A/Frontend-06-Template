JS语言通识
#语法分类
 非形式语言：中英文
 形式语言（乔姆斯基谱系：包含关系）：
  0：无限制文法（?::=?）
  1：上下文相关文法(?<A>?::=?<B>?)
  2：上下文无关文法(<A>::=?)
  3：正则文法(<A>::=<A>?)
用途：数据描述:JSON|HTML|XAML|SQL|CSS
      编程语言:C|C++|JavaScript...
表达方式 ： 声明式(关注结果):
              JSON|HTML|XAML|SQL|CSS|
           命令型(关注过程):
              C|C++|Java|C#|Python|Ruby|JavaScript
图灵完备性
  命令式——图灵机(goto | if和while)
  声明式——lambda(递归)
动态和静态
  动态
    在用户设备上/在线服务上
    在产品实际运行时/runtime
    动态语言是在运行时确定数据类型的语言。变量使用之前不需要类型声明，通常变量的类型是被赋值的那个值的类型
  静态：
    在程序员的设备上
    产品开发时/Compiletime
    静态语言是在编译时变量的数据类型即可确定的语言，多数静态类型语言要求在使用变量之前必须声明数据类型。 
强类型 无隐式转换
弱类型 有隐式转换
https://www.cnblogs.com/raind/p/8551791.html

产生式（BNF 巴科斯-诺尔范式）
 <语法结构名>
 语法结构 = 基础结构（终结符） + 需要用其他语法结构定义的复合结构（非终结符）
 终结符：字符串表示 ，可以用括号
  *  表示多次
  | 表示或
  + 表示至少一次

一般命令式编程语言的设计方式
Atom => Expression => Statement => Structure => Program(library/module/package)

Atom 
 Grammer:Literal/Variable/Keywords/Whitespace/Line Terminator
 Runtime:Types/Execution Context
 
Undefined Null String Number BooleanSymnol Object
Number: