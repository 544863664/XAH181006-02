<?php
/*
 字符串、整形、浮点型、数组、对象、null、布尔类型
 
 常量：
 	1.声明之后值不会改变的量。
 	2.PHP中常量的声明需要使用define函数。
 		define（constantName， constantValue， bol）；
 		bol：可选参数，默认false。true代表常量名大小写不敏感。
 	3.使用常量要注意：
 		（1）常量名推荐全大写（为了区分其他数据的名称）。
 		（2）常量一旦被声明，就不可以进行二次赋值。
 * */
define('PI', 3.141592653);
echo PI;
// PI = 3.14; //不可以为一个常量重新赋值
//echo Pi;

//字符串的拼接（并置）
$str1 = 'dsffds';
$str2 = 'ddddd';
$str3 = $str1.$str2;
echo $str3;
?>
<html>
<body>
<div>
    <?php
    $str4 = 'dsafgasadfdfskmk';
    //获取字符串的长度
    echo strlen($str4);
    ?>
</div>
<div>
    <?php
    //获取指定字符串在目标字符串中首次出现的位置,找不到返回false。
    $res2 = strpos($str4, 'asa');
    echo $res2;
    ?>
</div>
<div>
    <?php
    //字符串中连续的空格，在页面中是看不到的，但是在代码操作中是被承认的。
    $str5 = '  dfads   ';
    echo ltrim($str5, 'd').'<br>';
    echo rtrim($str5, 's');
    echo '<br>';


    trim('word dsf word', 'word');
    ?>
</div>
</body>
</html>
