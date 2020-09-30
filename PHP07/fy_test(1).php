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
//设置数据库编码格式
$con->query("set names 'utf8'");
//echo '成功';
////数据库操作
////require ('../PHP06/test1.php');
////查询当前分页的这张表中的数据总条目
$countSql = "select count(*) from test01";
$count = $con->query($countSql);
$total = mysqli_fetch_assoc($count)['count(*)'];
//echo $total;
////查询当前页码对应的数据
////接受前端串的当前页码和每页展示条目
$current = $_GET['currentPage'];
$rows = $_GET['numRows'];
$start = ($current - 1) * $rows;
$currentPageDataSql = "select * from test01 limit {$start},{$rows}";
$currentPageData = $con->query($currentPageDataSql);
$arr = [];
for ($i = 0; $i < $currentPageData->num_rows; $i++) {
    //mysqli_fetch_assoc函数没调用一次都会拿出指定对象中的一个关联数组，这个数组中包含当前这条信息所对应的键值对
    $data = mysqli_fetch_assoc($currentPageData);
    array_push($arr, $data);
}
//将二维数组$arr转码成前端能识别的json数据，返回给前端
$overData = array("total" =>$total,"data"=>$arr);
echo json_encode($overData);
?>