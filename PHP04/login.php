<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
//创建数据库连接
$serveName = 'localhost';
$username = 'lgd';
$password = '123456';
$db = 'xah181006';
$con = new mysqli($serveName,$username,$password,$db);
//var_dump($con);
//验证是否连接成功
if($con->connect_errno) {
    //die函数输出字符串，并阻止后面代码的执行。
    die('连接失败');
}
//如果代码能执行到这里，代表数据库连接成功
$sql = 'select * from test01';
$res = $con->query($sql);
//查询到的直接结果并不是理想数据，我们要将其处理成PHP能识别的数据

/*
 *   mysqli_fetch_assoc()函数接受一从数据库查找到的结果数据，
 * 调用一次这个函数，会从一堆信息中拿到一条信息，再次调用，再
 * 次拿一条，所以一般情况下，我们都使用循环，获取信息。
 * */
$tempArr = []; //声明一个索引数组，用来承接每次从$res中拿到的关联数组
for ($i = 0; $i < $res->num_rows; $i++) {
    $data = mysqli_fetch_assoc($res);
    array_push($tempArr,$data);
}
//将tempArr转成前端能识别的json字符串
$resJson = json_encode($tempArr);
echo $resJson; //输出给前端

/*$data = mysqli_fetch_assoc($res);
var_dump($data);
echo '<br>';
$data2 = mysqli_fetch_assoc($res);
var_dump($data2);*/
//var_dump($res);
$con->close(); //关闭数据库连接
?>
</body>
</html>