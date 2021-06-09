<?php
$juego = $_POST['juego'];
$precio = $_POST['precio'];
$correo = $_POST['correo'];
if ($juego === "") {
    echo json_encode("debes rellenar los datos");
} else {
    echo json_encode("Correcto\n" . $correo);
    $host = "localhost";
    $usu = "root";
    $clave = "";
    $bd = "juegos";
    $conexion = new PDO("mysql:host=$host;dbname=$bd", $usu, $clave);
    $sql = 'INSERT INTO juegos (juego,precio,correo) VALUES (?,?,?)';
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(1, $juego, PDO::PARAM_STR);
    $stmt->bindParam(2, $precio, PDO::PARAM_INT);
    $stmt->bindParam(3, $correo, PDO::PARAM_STR);
    $stmt->execute();
}
