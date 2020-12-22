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

HTTP
  Request:
  Response:

  第一步    设计一个HTTP类   content type是一个必要字段，要有默认值
            body是KV格式    不同的content-type影响body的格式
  第二步    在Request的构造器中收集必要信息，设计异步的send函数
  第三步  