<?php
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/auth.php';

function criarCep() {
    autenticar();

    $input = json_decode(file_get_contents('php://input'), true);
    $stmt = $GLOBALS['pdo']->prepare("INSERT INTO ceps (cep) VALUES (?)");
    $stmt->execute([$input['cep']]);

    echo json_encode(["mensagem" => "CEP cadastrado com sucesso"]);
}

function listarCeps() {
    autenticar();

    $cep = $_GET['cep'] ?? '';
    if ($cep) {
        $stmt = $GLOBALS['pdo']->prepare("SELECT * FROM ceps WHERE cep LIKE ?");
        $stmt->execute(["%$cep%"]);
    } else {
        $stmt = $GLOBALS['pdo']->query("SELECT * FROM ceps");
    }

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
