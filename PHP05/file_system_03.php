<?php
//下载一个线上文件的内容
//打开这个线上文件,线上文件如果没有管理员做特殊的操作，一般情况下，只能读
$f = fopen('https://daohang.qq.com/?fr=hmpage', 'r') or die('文件打开失败');
//打开本地要进行写操作的文件
$baidu = fopen('baidu.html', 'a+') or die('文件打开失败');
//逐行读取
while (!feof($f)) {
    //将读取到的百度首页的代码，写在本地的baidu.html中
    $data = fgets($f); //线上的每一行代码
    fwrite($baidu, $data);
}
?>