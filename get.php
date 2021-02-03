<?php

require_once './conf/connection.php';

$name = $_GET['name'];

$query = "SELECT * FROM Products WHERE name LIKE '%$name%'";

$result = $mysqli->query($query);

$json = [];

while ($row = $result->fetch_array()) {

    $json[] = [
        'id' => $row['id'],
        'name' => $row['name'],
        'description' => $row['description'],
        'url_image' => $row['url_image'],
        'price' => $row['price'],
        'amount' => $row['amount'],
    ];
}

echo json_encode(['data' => $json]);
