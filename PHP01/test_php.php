<?php
/*
 * addcslashes(string,characters)
 * 返回在指定的字符前添加反斜杠的字符串。
 * */
//在字符 "W" 前添加反斜杠
$str1 = addcslashes("Hello World!","W");
echo($str1).'<br>';
//删除由 addcslashes() 函数添加的反斜杠。
echo stripcslashes($str1).'<br>';
echo '<br>';

/*
 * addslashes(string)
 * 返回在预定义的字符前添加反斜杠的字符串。
 * */
//单引号（'）、双引号（"）、反斜杠（\）、NULL
$str2 = "Who's Peter Griffin?";
echo $str2 . " This is not safe in a database query.<br>";
$str3 = addslashes($str2) . " This is safe in a database query.".'<br>';
echo $str3;
//删除由 addslashes() 函数添加的反斜杠。
echo stripslashes($str3).'<br>';
echo '<br>';

/*
 * bin2hex(string)
 * 把 ASCII 字符的字符串转换为十六进制值。
 * */
//把一个字符串值从二进制转换为十六进制，
$str4 = "Hello world!";
echo bin2hex($str4) . "<br>";
//再转换回去
echo pack("H*",bin2hex($str4)) . "<br>";
echo '<br>';

/*
 * chop(string,charlist)
 * 移除字符串右侧的空白字符或其他字符。
 * */
//移除字符串右侧的换行符（\n）
$str5 = "Hello World!";
echo $str5.'<br>';
echo chop($str5, 'd!').'<br>';
echo '<br>';

/*
 * chr(ascii)
 * 从指定 ASCII 值返回字符。
 * */
$str6 = chr(43);
$str7 = chr(61);
//使用十进制值 43 和 61 来添加 ASCII 字符：+ 和 =。
echo("2 $str6 2 $str7 4").'<br>';
echo '<br>';

/*
 * chunk_split(string,length,end)
 * 把字符串分割为一连串更小的部分。
 * */
$str8 = "Hello world!";
//在每六个字符后分割一次字符串，并在每个分割后添加 "..."
echo chunk_split($str8,5,"...");
?>