<?php
	//后端：接收参数，查询第一页的数据，给前端
    $id = isset($_GET['id']) ? $_GET['id'] : '';
    $name = isset($_GET['name']) ? $_GET['name'] : '';
	//连接数据库
	include 'conn.php';
	
	//写查询语句 
	$sql= "SELECT *FROM goods WHERE id='$id'";
	//执行语句
	$res = $conn->query($sql);//结果集
	
	//需求：要数据
    $content = $res->fetch_all(MYSQLI_ASSOC);
    
    $content1=$content[0];
	$pic=$content1['pic'];
	$title=$content1['title'];
	$price=$content1['price'];
	var_dump($title,$price);
	$sql2= "INSERT INTO goodscar (id,title,name,price,pic) VALUES ('$id','$title','$name','$price','$pic')";
	var_dump($sql2);
	$res2 = $conn->query($sql2);//结果集
	var_dump($res2);
	//传给前端
	// echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>