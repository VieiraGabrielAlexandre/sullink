<?php
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/auth.php';

function criarUsuario() {
    autenticar();
    if (!isAdmin()) {
        http_response_code(403);
        echo json_encode(["erro" => "Apenas administradores podem criar usuários."]);
        return;
    }

    $input = json_decode(file_get_contents('php://input'), true);
    $senhaHash = password_hash($input['senha'], PASSWORD_DEFAULT);

    $stmt = $GLOBALS['pdo']->prepare("INSERT INTO usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, ?)");
    $stmt->execute([
        $input['nome'], $input['email'], $senhaHash, $input['tipo'] ?? 'cliente'
    ]);

    echo json_encode(["mensagem" => "Usuário criado com sucesso"]);
}

function listarUsuarios() {
    autenticar();
    $stmt = $GLOBALS['pdo']->query("SELECT id, nome, email, tipo FROM usuarios");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
