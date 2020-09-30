<?php
//接受前端ajax传输的数据
//var_dump($_POST); //关联数组
$users = array('tom'=>'123456', 'jerry'=>'000000', 'mary'=>'111111');
$uname = $_POST['uname'];
$pswd = $_POST['pswd'];
/*循环$users.可能产生三中结果
1.用户不存在
2.用户密码输入错误
3.用户登录成功
*/
/*
 * 登录结果状态
 * 0代表用户不存在，1代表密码错误，2代表成功
 * */
$status = 0;
foreach ($users as $n=>$p) {
    if ($n == $uname) {
        $status = 1;
        if ($p == $pswd) {
            //登录成功
            $status = 2;
        }
        break;
    }
}
$message = $status == 0 ? '用户不存在' : ($status == 1 ?'密码错误' : '登录成功');
echo '{"status":'.$status.',"message":"'.$message.'"}';
?>