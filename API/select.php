<?php
//链接config文件
include("./config.php");
$pageIndex=$_GET['pageIndex'];
$$count=$_GET['count'];
//书写sql语句
$sqlAll="select * from list";
//执行sql语句
$resAll=mysql_query($sqlAll);
//$res时资源类型
$list=array();
while($row=mysql_fetch_assoc($resAll)){
    array_push($list,$row);
}
$json=array(
    "res_code"=>1,
    "res_message"=>"查询成功",
    "res_body"=>array(
        "data"=>$list
    )
);
echo json_encode($json);
mysql_close()
?>