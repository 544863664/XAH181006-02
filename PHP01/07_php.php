<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div>
    <?php
        //声明数组的第一种方式
        $movies = array('流浪地球', '疯狂外星人', '飞驰人生', '新喜剧之王');
        echo $movies[3].'<br>';
        //使用var_dump可以输出任何类型的数据
        var_dump($movies);
        echo '<br>';
        $zy = array('明星大侦探', '梦想的声音', '歌手', true, 300, 3.1415926);
        var_dump($zy);
    ?>
    <div>
        <?php
            $boies = array('都是','地方','的方式','地方');
            //获取数组的长度
            $len = count($boies);
            echo $len.'<br>';
            $girls = array('贾玲', '杨茶余', '速度', '的方式');
            //获取数组的长度
            echo count($girls);
        ?>
    </div>
    <div>
        <?php
            $xq = ['窦娥冤', '梁山伯与祝英台', '秦香莲'];
            var_dump($xq); //索引数组
        ?>
    </div>
    <div>
        <p>关联数组</p>
        <?php
            $cp = array('霍建华'=>'胡歌', '王凯'=>'胡歌');
            var_dump($cp);
            echo '<br>'.$cp['霍建华'];
        ?>
    </div>
    <div>
        <p>循环数组</p>
        <?php
            for ($i = 0; $i < count($boies); $i++) {
                echo $boies[$i];
                echo '<br>';
            }
        ?>
    </div>
    <div>
        <p>使用foreach遍历关联数组</p>
        <?php
            foreach ($cp as $key=>$val) {
                echo $key.'----'.$val.'<br>';
            }
        ?>
    </div>
    <div>
        <p>PHP中的json处理</p>
        <?php
            $jsonStr = '[{"name": "tom", "age":"18"}]';
            $res1 = json_decode($jsonStr);
            var_dump($res1);
        ?>
    </div>
    <div>
        <p>后台接受到前端发送的用户名和密码，解析</p>
        <?php
            $loginMessge = '{"username":"tom", "password":"123456"}';
            //解析
            $loginRes = json_decode($loginMessge);
            var_dump($loginRes);
            //取出$loginRes中指定键对应的值
            echo '<br>'.$loginRes->{'username'};
            echo '<br>'.$loginRes->{'password'}.'<br>';
            //
            $loginRes2 = json_decode($loginMessge, true);
                var_dump($loginRes2);
            echo '<br>';
            echo $loginRes2['username'].'<br>';
            echo $loginRes2['password'].'<br>';
        ?>
    </div>
    <div>
        <p>将从数据库查询到的信息经过处理之后返给前端</p>
        <?php
            $productList = array('ID'=>1, 'name'=>'鲜花', 'price'=>189);
            //将其转换成json串
            $proStr = json_encode($productList);
            var_dump($proStr);
        ?>
    </div>
</div>
</body>
</html>