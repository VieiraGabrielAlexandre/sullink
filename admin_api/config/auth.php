<?php
session_start();

function autenticar() {
    if (!isset($_SESSION['usuario'])) {
        http_response_code(401);
        echo json_encode(["erro" => "Não autenticado"]);
        exit;
    }
}

function isAdmin() {
    return $_SESSION['usuario']['tipo'] === 'admin';
}
