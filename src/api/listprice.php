<?php
	//后端：接收参数，查询第一页的数据，给前端
	$price = isset($_GET['price']) ? $_GET['price'] : '';
	$price2 = isset($_GET['price2']) ? $_GET['price2'] : '';
	$page = isset($_GET['page']) ? $_GET['page'] : '1';
	$num = isset($_GET['num']) ? $_GET['num'] : '12';
	// $type = isset($_GET['type']) ? $_GET['type'] : '';
	include 'conn.php';
	// $index = ($page - 1) * $num;
	// if($type) {
	// 	//不为空：意味已经有值传过来，需要排序
	// 	$sql = "SELECT * FROM goods ORDER BY $type LIMIT $index,$num";
	// 	// $sql= "SELECT * FROM goods WHERE price BETWEEN '$price' AND '$price2'";
	// }else {
	// 	//空：没有传值过来，不需要排序
	// 	$sql = "SELECT * FROM goods LIMIT $index,$num";
	// }
	// $res = $conn->query($sql);//结果集
	// $content = $res->fetch_all(MYSQLI_ASSOC);
	$sql2= "SELECT * FROM goods WHERE price BETWEEN '$price' AND '$price2'";
	//执行语句
	$res2 = $conn->query($sql2);
	$content2 = $res2->fetch_all(MYSQLI_ASSOC);
	//获取结果集的总条数即可
	// echo $res2->num_rows;
	
	//如果要传输多个数据，可以做成关联数组
	$datalist = array(
		// 'data' => $content,
		'data2' => $content2,
		'total' => $res2->num_rows,
		'page' => $page,
		'num' => $num
	);
	
	echo json_encode($datalist,JSON_UNESCAPED_UNICODE);

	
	// echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
?>