<?php
$config=array(
    "host"=>"localhost:3306",
    "username"=>"root",
    "password"=>"",
    "dbname"=>"shop"
);
//与数据库建立链接
mysql_connect($config["host"],$config["username"],$config["password"]);
//选择数据库
mysql_select_db($config["dbname"]);
//设置编码
mysql_query("set charset 'utf8'");
mysql_query("set character set 'utf8'");
?>