<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
//创建一个类
class MovieStar {
    //用var关键词，声明一个公有属性
    var $name;

    //用public关键词，声明一个公有属性
    public $age;
    //声明属性的同时为这个属性赋了初值
    public $legs = 2;

    //用protected关键词，声明一个受保护的属性
    protected $married;

    //用private关键词，声明一个私有属性
    private $family;

    //类的构造函数
    function __construct($mName, $mAge, $mMarried, $mFamily) {
        /*
         *1.构造函数可以承接从这个类中实例化对象时，传个这个类的参数。
         *2.类的构造函数在每次使用new关键词从类中实例化对象时的时候被自动调用。
         * */
        //将参数绑定为属性
        //$this指向当前实例化的这个对象
        $this->name = $mName;
        $this->age = $mAge;
        $this->married = $mMarried;
        $this->family = $mFamily;
    }
    //析构函数
    function __destruct() {
        echo '<br>'.'在从类中实例化对象结束时调用';
    }

    //声明一个公有方法（可以省略关键词）
    public function act() {
        //在公有方法中获取属性
        echo $this->name.'喜欢演<br>';
    }

    function sing() {}
}
//从这个类中实例化出的对象
$ms1 = new MovieStar('章子怡', '48', true, []);
var_dump($ms1);
//调用$ms1的行为
$ms1->act();
echo '<br>'.'公有'.$ms1->age;
//度不到受保护的和私有属性
//echo '<br>'.'受保护的'.$ms1->married;
//echo '<br>'.'私有的'.$ms1->family;
?>
</body>
</html>
