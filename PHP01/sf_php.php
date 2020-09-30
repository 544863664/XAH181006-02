<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN" dir="ltr">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>简单计算机</title>
</head>
<body>
<form  method="post">
    第一个数<input type="text" value="" name="num1"><br />
    计算符号<select name="oper">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select><br />
    第二个数<input type="text" value="" name="num2"><br />
    <input type="submit" value="计算结果"><br />
</form>
<?php
$num1=$_POST['num1'];
$num2=$_POST['num2'];
$oper=$_POST['oper'];
$rs=0;
switch($oper){
    case "+":
        $rs=$num1+$num2;
        break;
    case "-":
        $rs=$num1-$num2;
        break;
    case "*":
        $rs=$num1*$num2;
        break;
    case "/":
        $rs=$num1/$num2;
        break;
    default: echo "您输入的不正确";
}
$_SESSION['rs']=$rs;
echo '计算结果为：'.$_SESSION['rs'];
?>
<!---->
<?php
echo '<br>';
function get($num1,$num2){
    $rs1=$num1+$num2;
    echo '两数相加等于:'.$rs1.'<br>';
    $rs2=$num1-$num2;
    echo '两数相减等于:'.$rs2.'<br>';
    $rs3=$num1*$num2;
    echo '两数相乘等于:'.$rs3.'<br>';
    $rs4=$num1/$num2;
    echo '两数相除等于:'.$rs4.'<br>';
}
get(50, 30);
?>
</body>
</html>