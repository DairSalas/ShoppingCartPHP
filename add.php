<?php 

require_once './conf/connection.php';

$productName = $_POST['productName'];
$productUrlImage = $_POST['productUrlImage'];
$productDescription = $_POST['productDescription'];
$productPrice = $_POST['productPrice'];
$productQuantity = $_POST['productQuantity'];

$query = "INSERT INTO `Products` (`id`, `name`, `url_image`, `description`, `price`, `amount`) VALUES (NULL, '$productName', '$productUrlImage', '$productDescription', '$productPrice', '$productQuantity')";

$result = $mysqli->query($query);

$inserted_id = $mysqli->insert_id;

echo json_encode(['data' => ($inserted_id > 0) ? 'Se agregó el producto' : 'No se puedo agregar el producto']);