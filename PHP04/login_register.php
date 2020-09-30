<?php
//创建数据库连接
$sn = 'localhost';
$un = 'lgd';
$pd = '123456';
$db = 'xah181006';
$con = new mysqli($sn,$un,$pd,$db); //数据库连接诶对象
//判断数据库是否连接成功
if ($con->connect_error) {
    die('数据库连接失败');
}
//如果代码执行到此，代表数据库连接成功
//echo 'OK';

//解析前端的HTTP请求
//$_POST中含有这次请求发送过来的所有数据，$_POST数据类型是关联数组
//var_dump($_POST);

//跟据前端串的type值，确定当前的操作类型
$type = $_POST['type'];
switch ($type) {
    case 'login':
        login();
        break;
    case 'register':
        register();
        break;
}
//登录
function login() {
    global $con;
    //接受前端串的用户名和密码
    $uname = $_POST['uname'];
    $pswd = $_POST['pswd'];
    //执行sql语句做对比，查询该用户名对应的密码，查到的条目数为0，代表用户不存在，查到的密码和用户名输入的密码不相等，代表密码错误,第三种就是登陆成功。
    $sql = "select `password` from `test01` where `username` = '{$uname}' ";
    $res = $con->query($sql);
    $status = 0;
    if ($res->num_rows > 0) {
        //用户存在
        $status = 1;
        //获取查询到数据库中用户名注册时存储的密码
        $data = mysqli_fetch_assoc($res);
        $r_pswd = $data['password'];
        //和用户输入的密码做匹配
        if ($pswd == $r_pswd) {
            $status = 2;
        }
    }
    //向前端输出最终的登录结果
    echo json_encode(array('status'=>$status));
};
//注册
function register() {
    global $con;
    //接受用户的注册信息
    $uname = $_POST['uname'];
    $pswd = $_POST['pswd'];
    //检测数据库中是否存在该用户
    $testSql = "select `ID` from `test01` where `username`='{$uname}'";
    $testRes = $con->query($testSql);
    //$testRes是对象，这个对象的num_rows键代表查询到的数据条目，如果这个用户不存在，那么num_rows为0，可以注册
    if ($testRes->num_rows > 0) {
        die(json_encode(array('status'=>2,'mess'=>'此用户已存在')));
    }
    //使用sql语句完成注册
    $sql = "insert into `test01` (`ID`,`username`,`password`) value (NULL,'{$uname}','{$pswd}')";
    $res = $con->query($sql);
    //insert语句被数据库连接对象的query函数执行后，返回值是一个bool类型的数据，true代表添加成功，false代表添加失败。
    if ($res) {
        echo json_encode(array('status'=>1,'mess'=>'注册成功'));
    } else {
        echo json_encode(array('status'=>0,'mess'=>'注册失败'));
    }
    //将结果返回前端
};
//关闭数据库连接
$con->close();
?>