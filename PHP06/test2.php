<?php
//引入外部的PHP文件，并对其做操作
require('test1.php');
//因为冲数据库中查询到的编码格式有出入，要通过数据库连接（$con）设置数据库查询结果的编码格式
$con->query("set names 'utf8'");

//使用已引入的PHP文件中的代码块
$res = $con->query('select * from test01');
//将查询到的结果装换成json串返回
$arr = [];
for ($i = 0; $i < $res->num_rows; $i++) {
    $data = mysqli_fetch_assoc($res);
    array_push($arr, $data);
}
echo json_encode($arr);
$con->close();
?>