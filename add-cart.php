<?php

require_once './conf/connection.php';

$productId = $_POST['productId'];
$productCartQuantity = $_POST['productCartQuantity'];

$query = "SELECT * FROM Products WHERE id = $productId";

$result = $mysqli->query($query);

while ($row = $result->fetch_array()) {

    $productName =  $row['name'];
    $productUrlImage = $row['url_image'];
    $productDescription = $row['description'];
    $productPrice = $row['price'];
    $amount = $row['amount'];
    
}

$query = "SELECT * FROM Carts WHERE producto_id = $productId";

$result = $mysqli->query($query);

$row_cnt = $result->num_rows;

if ($row_cnt > 0) {

    $row = $result->fetch_array();

    $amount_cart = $row['amount'];
    $amount_sum = $amount_cart + $productCartQuantity;

    $query = "UPDATE Carts SET amount = $amount_sum WHERE producto_id = $productId";

    $result = $mysqli->query($query);

} else {

    $query = "INSERT INTO `Carts` (`id`, `name`, `url_image`, `description`, `price`, `amount`, `producto_id`) VALUES (NULL, '$productName', '$productUrlImage', '$productDescription', '$productPrice', '$productCartQuantity', '$productId')";

    $result = $mysqli->query($query);
    
    $inserted_id = $mysqli->insert_id;    

}

$amountEdited = $amount - $productCartQuantity;


$query = "UPDATE Products SET amount = $amountEdited WHERE id = $productId";

$result = $mysqli->query($query);

echo json_encode(
    [
        'data' => 'Agregado al carrito'
    ]
);
