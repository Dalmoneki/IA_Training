import React from 'react';
import '../styles/Login.css';

const Login: React.FC = () => {
  return (
    <div className="login-page">
      {/* Cabeçalho */}
      <header className="login-header">
        <img src="/logo.png" alt="Prefeitura RIO" className="logo" />
        <h1>RioSaúde</h1>
      </header>

      {/* Container do Formulário */}
      <div className="login-container">
        <h2>Acesso ao Treinamento de IA</h2>
        <form>
          <label>
            Nome Completo:
            <input type="text" placeholder="Digite seu nome completo" />
          </label>

          <label>
            Email:
            <input type="email" placeholder="exemplo@email.com" />
          </label>

          <label>
            Data de Início do Curso:
            <input type="date" placeholder="dd / mm / aaaa" />
          </label>

          <div className="checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              Concordo com os termos de uso e política de privacidade do curso
            </label>
          </div>

          <button type="submit">Entrar</button>
        </form>

        <p className="help-text">
          Problemas com o acesso? Entre em contato pelo email:{' '}
          <a href="mailto:suporte@riosaude.rio.br">suporte@riosaude.rio.br</a>
        </p>

        {/* Rodapé Dentro do Corpo */}
        <footer className="login-footer">
          © Todos os direitos reservados ao NINN RIOSAÚDE 2025
        </footer>
      </div>
    </div>
  );
};

export default Login;