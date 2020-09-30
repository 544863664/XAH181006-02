<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .box-actice {
            background: red;
        }
        .box-defautl {
            background: darkgoldenrod;
        }
        .box-success {
            background: aqua;
        }
        .box-warning {
            background: cornflowerblue;
        }
        .wrap div {
            width: 200px;
            height: 200px;
        }
    </style>
</head>
<body>
<div class="wrap">
    <?php
    $flag = 0;
    //跟据flag缺点wrap的子元素
    if ($flag) {
        echo '<div class="box-actice"></div>';
    } else {
        echo '<div class="box-defautl"></div>';
    }
    ?>
</div>
<div class="wrap">
    <?php
    /*
     * 1.php的switch...case语句，没有做'==='的判断（js做的是'==='）.
     * 2.break在switch...case中的影响和js是相同的。
     * */
    $var = 0;
    switch ($var) {
        case 0:
            $className = 'box-success';
            break;
        case 1:
            $className = 'box-wraning';
            break;
        case 3:
            break;
    }
    echo '<div class="'.$className.'"></div>';
    ?>
</div>
</body>
</html>