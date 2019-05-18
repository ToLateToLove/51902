<?php
	//后端：接收参数，查询第一页的数据，给前端
	$name = isset($_GET['name']) ? $_GET['name'] : '';
	//连接数据库
	include 'conn.php';
	
	//写查询语句 
	$sql= "SELECT *FROM reg WHERE name='$name'";
	//执行语句
	$res = $conn->query($sql);//结果集
	
	if($res->num_rows) {
		//找到了，已存在，不给注册
		    echo 'no';
	}else {
		    echo 'yes';
	}
?>