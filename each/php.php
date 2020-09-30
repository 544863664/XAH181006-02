<?php
//创建数据量连接
$sn = 'localhost';
$un = 'lgd';
$pd = '123456';
$db = 'xah181006';
$con = new mysqli($sn, $un, $pd, $db);
//验证数据库是否连接成功
if ($con->connect_error) {
    die('数据库连接失败');
}
//数据库操作
$sql = "select * from test01 where username LIKE '___'";
$sql1 = "select * from test01 where username LIKE '%1%'";
var_dump($con->query($sql));
echo '<br>';
var_dump($con->query($sql1));
?>