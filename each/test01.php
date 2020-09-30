<?php
//查询一道10条的数据
"select * from table limit 0, 10";
"select * from table limit (1-1)*10,10";
//查询10到20条的数据
"select * from table limit 10, 20";
"select * from table limit (2-1)*10,10";
//查询20到30条的数据
"select * from table limit 20, 30";
"select * from table limit (3-1)*10,10";
//
//"select * from table limit (currentPage-1)*messageNum,messageNum";
//currentPage:当前页码
//messageNum：每页展示数据的条目
?>