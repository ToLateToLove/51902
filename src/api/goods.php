<?php
	//后端：接收参数，查询第一页的数据，给前端
	$id = isset($_GET['id']) ? $_GET['id'] : '';
	//连接数据库
	include 'conn.php';
	
	//写查询语句 
	$sql= "SELECT *FROM goods WHERE id='$id'";
	//执行语句
	$res = $conn->query($sql);//结果集
	
	//需求：要数据
    $content = $res->fetch_all(MYSQLI_ASSOC);
    
    
	
	//传给前端
	echo json_encode($content,JSON_UNESCAPED_UNICODE);
	
	//获取结果集的总条数即可
?>