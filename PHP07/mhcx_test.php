<?php
//创建连接数据库
$sn = 'localhost';
$un = 'lgd';
$pd = '123456';
$db = 'xah181006';
$con = new mysqli($sn, $un, $pd, $db);
//验证数据库是否连接成功
if ($con->connect_error) {
    die('数据库连接失败');
}
//设置数据库编码格式
$con->query("set names 'utf8'");
//数据库操作
//接受前端发送的数据
$val = $_GET['val'];
//使用sql查询语句搜索到val的相关搜索
$sql = "select * from test01 where username like '%{$val}%'";
$res = $con->query($sql);
//转换成json格式的数据
$user = [];
//如果sql语句执行成功，就有数据，此时将查询结果返回给前端
if ($res) {
    for ($i = 0; $i < $res->num_rows; $i++) {
        $data = mysqli_fetch_assoc($res);
        array_push($user, $data);
    }
} else {
    //如果查询失败，向前端做出提示
    echo '查询失败';
}
//将$user转换为前端能识别的json字符串
echo json_encode($user);
//关闭数据库连接
$con->close();
?>