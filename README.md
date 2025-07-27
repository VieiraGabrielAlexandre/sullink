# Sul Link - Provedor de Internet Fibra Óptica

![Sul Link](https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)

## 📡 Sobre o Projeto

O Sul Link é um provedor de internet de alta velocidade com tecnologia de fibra óptica, oferecendo planos residenciais e empresariais com excelente custo-benefício. Este projeto consiste em um site institucional moderno e responsivo, juntamente com um painel administrativo para gerenciamento de usuários e validação de CEPs para verificação de cobertura.

## ✨ Características Principais

### Site Institucional
- **Design Responsivo**: Adaptação perfeita para dispositivos móveis, tablets e desktops
- **Seções Informativas**: Apresentação da empresa, vantagens, planos e valores
- **Planos Detalhados**: Exibição clara dos planos de internet disponíveis
- **Contato Direto**: Botão flutuante de WhatsApp para atendimento imediato
- **Integração com Redes Sociais**: Links para Facebook e Instagram
- **Animações Interativas**: Efeitos visuais para melhor experiência do usuário

### Painel Administrativo
- **Gerenciamento de Usuários**: Cadastro e consulta de clientes e administradores
- **Validação de CEPs**: Verificação de áreas de cobertura do serviço
- **Autenticação Segura**: Sistema de login com controle de sessão
- **API RESTful**: Endpoints para integração com outros sistemas

## 🚀 Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3 (com design responsivo)
- JavaScript (ES6+)
- Font Awesome (para ícones)

### Backend
- PHP 7.4+
- MySQL
- API RESTful

## 🔧 Instalação e Configuração

### Requisitos
- Servidor web (Apache, Nginx)
- PHP 7.4 ou superior
- MySQL

### Passos para Instalação

1. Clone o repositório:
```bash
git clone https://github.com/VieiraGabrielAlexandre/sullink.git
```

2. Configure o servidor web para apontar para o diretório do projeto

3. Para o painel administrativo:
   - Crie um banco de dados MySQL
   - Execute o script SQL para criar as tabelas necessárias:
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
   - Configure as credenciais do banco de dados no arquivo `admin_api/config/db.php`

4. Inicie o servidor da API (opcional para desenvolvimento local):
```bash
cd admin_api
php -S localhost:8000 -t public
```

## 📂 Estrutura do Projeto

```
sullink/
├── index.html          # Página principal do site
├── styles.css          # Estilos CSS
├── script.js           # JavaScript do frontend
├── admin_api/          # API de administração
│   ├── config/         # Configurações da API
│   ├── controllers/    # Controladores da API
│   ├── public/         # Ponto de entrada da API
│   └── routes/         # Rotas da API
└── README.md           # Documentação do projeto
```

## 📱 Funcionalidades do Site

- **Navegação Intuitiva**: Menu responsivo com links para todas as seções
- **Apresentação de Planos**: Exibição detalhada dos planos de internet
- **Área Empresarial**: Informações sobre planos para empresas
- **Valores da Empresa**: Missão, visão e valores
- **Contato Rápido**: Botão de WhatsApp flutuante para atendimento imediato
- **Links Úteis**: Acesso a informações importantes no rodapé

## 🔒 API de Administração

A API de administração oferece endpoints para:

- Autenticação de usuários (`POST /login`)
- Gerenciamento de usuários (`POST /usuarios`, `GET /usuarios`)
- Verificação de CEPs para cobertura (`POST /ceps`, `GET /ceps`)

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido por Gabriel Vieira.
## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

© 2025 Sul Link - Todos os direitos reservados