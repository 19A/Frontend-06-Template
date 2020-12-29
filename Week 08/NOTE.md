浏览器
    url --> HTML --> DOM --> DOM with CSS --> DOM with position --> Bitmap
    有限状态机：多个纯函数方法，互相解耦，这些方法接受同一个参数。
      A.Moore状态机:输出不由参数控制
      B.Mealy状态机:输出由参数控制
      function state(input){
        return next;
      }
      while(input){
        state = state(input);
      }

ISO-OSI七层网络模型
  应用
  表示
  会话
      HTTP    require("http");
  传输
      TCP     require("net");
  网络
      Internet
  数据链路
  物理层
      4G /5G /Wi-Fi
  TCP与IP的一些基础知识

  流      
  端口（计算机网卡根据端口把接收数据包分给各个应用）
    require("net");
  包
  IP地址（连入Internet的唯一标识）
    node底层调用C++的 libnet/libpcap
第一部分:HTTP
  Request:
  Response:

  第一步    设计一个HTTP类   content type是一个必要字段，要有默认值
            body是KV格式    不同的content-type影响body的格式
  第二步    在Request的构造器中收集必要信息，设计异步的send函数
  第三步    设计ResponseParser ，分段处理ResponseText,使用状态机，对response的解析， 
            根据content-type的不同body也会不一样，设计不同的子状态机来解析对应的response body
第二部分:HTTP的解析
  1.拆分文件 为了方便文件管理，拆分parser，接受html文本为参数，返回DOM树
  2.利用状态机FSM 结合 HTML标准规定状态 解析整个DOM树
    a.解析标签(开始，结束，自闭)           --- 状态迁移
    b.创建元素(标签结束状态提交标签token)   --- 业务逻辑，创建token，将字符添加到token，最后emit token
    c.添加属性(beforeAttributeName,afterAttributeName,attributeName)
  3.用token构建DOM树, 将token进行入栈和出栈。添加文本节点处理逻辑。
第三部分：CSS计算
  环境准备：npm install css (cssParser，对css的词法、语法处理，生成对应的AST抽象语法树)
  1.收集CSS规则（遇到style标签，将CSS规则保存；调用CSS Parser分析CSS规则；仔细探究此库分析CSS规则的格式）
  2.添加调用（当我们创建一个元素时，立即计算出CSS；
            理论上，当我们分析一个元素时，所有的CSS规则已经收集完毕；
            暂时忽略真实body中的style标签，需要重新计算CSS）
  3.获取父元素序列
第四部分：排版
第五部分：渲染
