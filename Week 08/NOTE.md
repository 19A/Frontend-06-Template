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