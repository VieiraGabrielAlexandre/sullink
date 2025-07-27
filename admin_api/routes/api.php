<?php
$uri = str_replace('/admin/public', '', parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$method = $_SERVER['REQUEST_METHOD'];

require_once __DIR__ . '/../controllers/AuthController.php';
require_once __DIR__ . '/../controllers/UsuarioController.php';
require_once __DIR__ . '/../controllers/CepController.php';

header('Content-Type: application/json');

switch ("$method $uri") {
    case 'POST /login':
        login();
        break;
    case 'POST /usuarios':
        criarUsuario();
        break;
    case 'GET /usuarios':
        listarUsuarios();
        break;
    case 'POST /ceps':
        criarCep();
        break;
    case 'GET /ceps':
        listarCeps();
        break;
    default:
        http_response_code(404);
        echo json_encode(["erro" => "Rota não encontrada: $method $uri"]);
}
