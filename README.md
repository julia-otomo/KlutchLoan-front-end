<h1 align="center"> 📱 Aplicação de Empréstimo </h1>

📜 Descrição
Esta aplicação tem como objetivo simular a solicitação de empréstimo de clientes.

📚 Funcionalidades
-Cadastro de clientes: O administrador pode cadastrar novos clientes que estão interessados em realizar um empréstimo.

-Gerenciamento de clientes: O administrador pode gerenciar as informações dos clientes, sendo possível obter informações específicas de um cliente, atualizar as informações e deletar as informações.

-Cadastro da conta bancária de um cliente: O administrador pode cadastrar informações da conta bancária de um cliente e linkar ao perfil do mesmo.

-Gerenciamento da conta bancária de um cliente: O administrador pode gerenciar as informações da conta bancária de um cliente, sendo possível visualizar, atualizar e deletar essas informações.

-Cadastro de cartões de crédito de um cliente: O administrador pode cadastrar as informações de cartões de crédito de um cliente e linkar ao perfil do mesmo.

-Gerenciamento de cartões de crédito de um cliente: O administrador pode gerenciar as informações de cartões de crédito de um cliente, sendo possível visualizar, atualizar e deletar essas informações.

-Cadastro de tabelas de taxa: O administrador pode cadastrar novas tabelas de taxa.

-Gerenciamento de tabelas de taxa: O administrador pode gerenciar as informações as informações de uma tabela de taxa específica.

-Cadastro das informações de parcelas de uma tabela de taxa: O administrador pode cadastrar informações de parcelas de uma tabela de taxa, adicionando taxas de juros para cada parcela e a comissão.

-Listagem das informações de parcelas de uma tabela de taxa: Ao enviar o valor de interesse por query params, é simulado o valor total e o valor da parcela para cada parcela de uma tabela de taxa.

-Gerenciamento das informações de parcelas de uma tabela de taxa: O administrador pode gerenciar as informações de parcelas de uma tabela de taxa, sendo possível obter, atualizar e deletar essas informações.

-Cadastro das informações de uma solicitação de empréstimo: O administrador pode cadastrar informações de uma solicitação de empréstimo, adicionando todas as informações necessárias para um empréstimo, linkando com um cliente, com uma tabela de taxa e com um tipo de parcela.

-Gerenciamento das informações de uma solicitação de empréstimo: O administrador pode gerenciar as informações de uma solicitação de empréstimo, sendo possível obter, atualizar e deletar essas informações.

## :wrench: Tecnologias utilizadas

- Typescript;
- Nextjs;
- Axios;
- Zod;
- React-hook-form;
- React-toastify;
- Tailwind;
- Flowbite

## :rocket: Utilizando a aplicação

Para utilizar a aplicação acesse: https://klutchloan-front-julia-otomo.vercel.app/.
A API utilizada se encontra <a href="https://github.com/julia-otomo/KlutchLoan-back-end">aqui</a> .

Caso prefira clonar o repositório:

Observação: Para esse projeto foi utilizada a versão 9.6.2 do node.

- Primeiramente é necessário é necessário clonar o repositório;
- Depois insira o seguinte comando no terminal ao iniciar o projeto para instalar todas as dependências necessárias:

1. Instale todas as dependências:

```bash
npm run install
```

2. Rode a aplicação:

```bash
npm run dev
```
