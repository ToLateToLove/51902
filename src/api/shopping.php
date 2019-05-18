<?php
	//后端：接收参数，查询第一页的数据，给前端
    $name = isset($_GET['name']) ? $_GET['name'] : '';
	//连接数据库
	include 'conn.php';
	
	//写查询语句 
	$sql= "SELECT *FROM goodscar WHERE name='$name'";
	//执行语句
	$res = $conn->query($sql);//结果集
	
	//需求：要数据
    $content = $res->fetch_all(MYSQLI_ASSOC);
    
    
	// 传给前端
	echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>