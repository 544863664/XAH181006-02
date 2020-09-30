<!DOCTYPE HTML>
<html>
<head>
<title></title>
<style type="text/css">
div {
width: 100px;
height: 100px;
background: red;
}
</style>
</head>
<body>	
<div class="wrap">
<?php
echo <<<EOF
	<div class="box">
	    <h1>我的第一个标题</h1>
	    <p>我的第一个段落。</p>
   </div>
EOF;
// 结束需要独立一行且前后不能空格
?>
</div>
</body>
</html>