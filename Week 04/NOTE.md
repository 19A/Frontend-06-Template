字符串分析算法
字典树
  大量高重复字符串 存储与分析 （整体 -- 整体）
  概念
    3499
    0015
    0002
    0007
  - 3 -> 4 -> 9 -> 9
    0 -> 0 -> 1 -> 5
           -> 0 -> 2
                -> 7
  应用:随机字符串存储为字典树
      分析其中出现的最多次数或最少次数的字符串

KMP
  检查长字符串中 是否有短字符串的部分 （整体 -- 部分）
    朴素B-F   m*n 
    KMP -> m+n
  patten:abcdabce
  source:abcdabcdabdcex 
  关键点：  
          a:
          b:部分匹配表（Partial Match Table）；
            PMT值的意义：字符串的前缀集合和后缀集合交集中最长元素的长度。
            next数组：对自身进行匹配，以模式串的前缀为目标，当前的next值就是匹配
                    成功的字符串长度。
          初始化 i = 1，j = 0;
            i
          a b a b a b c a      next[2]=0; 
            a b a b a b c a   
            j
              i
          a b a b a b c a      
              a b a b a b c a  next[3]=1;  
              j
                i
          a b a b a b c a      
              a b a b a b c a  next[4]=2; 
                j
                  i
          a b a b a b c a      
              a b a b a b c a  next[5]=3; 
                    j
          a b a b a b c a      
              a b a b a b c a  next[6]=4; 
                    j
                      i                               i
          a b a b a b c a                 a b a b a b c a      
              a b a b a b c a                         a b a b a b c a
                      j           =>                  j
                      next[7]=0; 
Wildcard（未知数）
  带通配符的字符串模式
正则
  字符串通用模式匹配
状态机  
  通用的字符串分析
LL LR
  字符串多层级结构分析
