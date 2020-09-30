<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
function fnName() {
    echo 1;
}
fnName();
echo '<br>';
function add($m, $n) {
    echo $m + $n;
}
add(6, 8);
echo '<br>';
function sum($m, $n) {
    return $m + $n;
}
$s1 = sum(100, 101);
echo $s1;
?>
<div>
    <?php
    $str = '了看来是客';
    function fn1() {
        //在PHP中局部作用域无法直接使用全局的未加修饰的的变量，如果想使用要加global修饰。
        global $str;
        $res = $str.'行业热点';
        echo $res;
    }
    fn1();
    ?>
</div>
</body>
</html>