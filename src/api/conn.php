<?php
    //连接数据库，
    //1.准备参数
    $severname = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = '51902';
    //2.创建连接
    $conn = new mysqli($severname,$username,$password,$dbname);
    //如果出错提示错误信息
	/*
	 	js调用属性：obj.name
	 	php调用属性：obj->name
	 	js调用方法：obj.show()
	 	php调用方法：obj->show()
    */
    
    if($conn->connect_error){
        die("连接失败: " . $conn->connect_error);
    }
    // echo 'ok';
	// $res->close();//关闭结果集
	// $conn->close();//关闭数据库连接
?>