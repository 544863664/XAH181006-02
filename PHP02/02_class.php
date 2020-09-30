<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
//声明一个分数类，实现约分及加，减，乘，除
class Grede {
    //声明公有属性
    public $t = 1;
    public $b = 1;

    //类的构造函数
    function __construct($top, $bottom)
    {
        //为类绑定属性值
        $this->t = $top;
        $this->b = $bottom;
    }

    //正常的形式输出
    function printGrade()
    {
        echo '<p>'.$this->t.'/'.$this->b.'</p>';
    }

    //约分
    function yf()
    {
        //求出约分两个数的大小
        $min = $this->t > $this->b ? $this->b : $this->t;
        $max = $this->t + $this->b - $min;
        //用辗转相除法求最大公约数
        while ($min !=0) {
            $c = $max % $min;
            $max = $min;
            $min = $c;
        }
    }

    //加
    function add($n)
    {
        $tis->t = $this->t * $n->b + $this->b * $n->t;
        $this->b = $this->b * $n->b;
        $this->yf();
    }

    //减
    function jian($n)
    {
        $this->t = $this->t * $n->b - $this->b * $n->t;
        $this->b = $this->b * $n->b;
        $this->yf();
    }

}
$g1 = new Grede(10, 50);
$g2 = new Grede(9, 5);
var_dump($g1);
$g1->add($g2);
//$g1->yf();
$g1->printGrade();
?>
</body>
</html>