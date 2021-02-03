<?php

require_once './conf/connection.php';

$id = $_GET['id'];

$query = "SELECT * FROM Products WHERE id = $id";

$result = $mysqli->query($query);

$json = [];

while ($row = $result->fetch_array()) {
    $json['id'] = $row['id'];
    $json['name'] = $row['name'];
    $json['description'] = $row['description'];
    $json['url_image'] = $row['url_image'];
    $json['price'] = $row['price'];
    $json['amount'] = $row['amount'];
}

echo json_encode(['data' => $json]);
