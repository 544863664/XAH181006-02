<?php
for($i=1;$i<=9;$i++){
    for ($j=1;$j<=$i;$j++){
        $k=$i*$j;
        echo "$j*$i=$k";
        echo "&nbsp;&nbsp;";
    }
    echo "<br>";
}
?>