<?php
//引入数据库
require ('../PHP06/test1.php');
//设置编码格式
$con->query("set names 'utf8'");
//操作数据库
//获取前端传输过来的type值
$type = $_GET['type'];
switch ($type) {
    case 'litre':
        litre();
        break;
    case 'fall':
        fall();
        break;
}
//封装升序函数
function litre() {
    global $con;
    //
    $sql = "select ID,username from test01 order by ID";
    $res = $con->query($sql);
    //处理后台数据，将其转为前端可以识别的json格式的字符串
    $arr = [];
    for ($i = 0; $i < $res->num_rows; $i++) {
        $data = mysqli_fetch_assoc($res);
        array_push($arr, $data);
    }
    echo json_encode($arr);
};
//封装降序函数
function fall() {
    global $con;
    //
    $sql = "select ID,username from test01 order by ID DESC";
    $res = $con->query($sql);
    //处理后台数据，将其转为前端可以识别的json格式的字符串
    $arr = [];
    for ($i = 0; $i < $res->num_rows; $i++) {
        $data = mysqli_fetch_assoc($res);
        array_push($arr, $data);
    }
    echo json_encode($arr);
};
?>