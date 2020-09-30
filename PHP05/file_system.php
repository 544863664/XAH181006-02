<?php
//操作文件
//1.打开文件,以读的方式打开这个文件文件指针在文件开头
//or运算符出现在语句当中相当于出现在表达式中的||运算符
$f = fopen('file_system.txt', 'r') or die('打开文件失败');
//2.对已经打开额文件进行读写操作
//$row_mess = fgets($f);
//echo $row_mess.'<br>';
//echo fgets($f).'<br>';
//echo fgets($f).'<br>';
//echo fgets($f).'<br>';
//echo fgets($f).'<br>';
//echo fgets($f).'<br>';
//$res = feof($f);
//var_dump($res);
while (!feof($f)) {
    //读取
    echo fgets($f).'<br>';
}
//3.操作结束后，关闭文件，释放存储空间
fclose($f);
?>