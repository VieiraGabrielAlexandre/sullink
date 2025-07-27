# API de Gerenciamento de Usuários e CEPs

## Requisitos
- PHP 7.4+
- MySQL

## Instalação
1. Clone ou extraia este projeto dentro da pasta `admin/`
2. Crie o banco de dados e execute as tabelas abaixo:

```sql
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  senha VARCHAR(255),
  tipo ENUM('admin', 'cliente') DEFAULT 'cliente'
);

CREATE TABLE ceps (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cep VARCHAR(9) UNIQUE
);
```

3. Execute localmente com:

```bash
php -S localhost:8000 -t public
```

## Endpoints

- `POST /login` → `{ "email": "...", "senha": "..." }`
- `POST /usuarios` (admin)
- `GET /usuarios` (admin)
- `POST /ceps`
- `GET /ceps?cep=123`

Sessão é mantida automaticamente via cookie.
