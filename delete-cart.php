<?php

require_once './conf/connection.php';


$cartId = $_GET['id'];

$query = "SELECT * FROM Carts WHERE id = $cartId";

$result = $mysqli->query($query);

while ($row = $result->fetch_array()) {

    $amountInCart = $row['amount'];
    $productId = $row['producto_id'];
}

$result->free();

$query = "DELETE FROM Carts WHERE id = $cartId";
$result = $mysqli->query($query);

$query = "SELECT * FROM Products WHERE id = $productId";

$result = $mysqli->query($query);

while ($row = $result->fetch_array()) {

    $amountProduct = $row['amount'];
}

$result->free();

$amountTotal = $amountProduct + $amountInCart;

$query = "UPDATE Products SET amount = $amountTotal WHERE id = $productId";

$result = $mysqli->query($query);

echo json_encode(
    [
        'data' => ($mysqli->affected_rows > 0) ? "El producto fue eliminado del carrito" : "No se pudo quitar del carrito"
    ]
);
