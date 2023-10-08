<h1 align="center"> 📱 Aplicação de Empréstimo </h1>

📜 Descrição
Esta aplicação tem como objetivo simular a solicitação de empréstimo de clientes.

📚 Funcionalidades

Obs: Como o deploy da API foi realizada de forma gratuita no Render (serviço de armazenamento em nuvem de aplicativos e websites), é possível que dê alguns erros de requisição e aí é preciso reiniciar a página algumas vezes até funcionar.

- <b>Adicionar o valor desejado para empréstimo:</b>

<img src="/src/assets/page1.png">

-Selecionar a parcela;

<img src="/src/assets/page1-2.png">

Exemplo:

<img src="/src/assets/page1-3.png">

Obs: A seleção da parcela não ficou muito evidente na tabela pois como o componente utilizado foi da biblioteca flowBite (é uma biblioteca open-source de componentes UI baseada na estrutura Tailwind CSS), ainda estou aprendendo como customizar a estilização desses componentes.

- <b>Selecionar cliente para a solicitação:</b>
  Obs: Tanto o cadastro do cliente, como da tabela de taxa e de suas parcelas e da conta bancária do cliente devem ser realizadas diretamente pela API antes de acessar essa aplicação.

<img src="/src/assets/page2.png">

<img src="/src/assets/page2-2.png">

- <b>Escolher modalidade:</b>
  Obs: Essa página é apenas demonstrativa, pois somente a opção cartão de crédito está ativa.

<img src="/src/assets/page3.png">

- <b>Cadastrar cartão de crédito do cliente</b>

<img src="/src/assets/page4.png">

<img src="/src/assets/page4-2.png">

Obs: Estou averiguando do porquê não estar aparecendo o nome dos arquivos ao lado do botão adicionar.

- <b>Alterar tipo de contrato:</b>
  Obs: Estou tentando também deixar funcional a mudança de tabela e de parcela.

<img src="/src/assets/page5.png">

- <b>Mostrar informações parciais da solicitação de empréstimo:</b>

<img src="/src/assets/page6.png">

- <b>Mostrar informações completas da solicitação de empréstimo:</b>

<img src="/src/assets/page7.png">

<img src="/src/assets/page7-2.png">

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

- Primeiramente é necessário clonar o repositório -> na página do repositório, há um botão azul escrito "code", ao clicar no mesmo irá mostrar um dropdown com as opções HTTPS, SSH, GitHub CLI. Escolha a opção SSH e copie o conteúdo. Após isso, abra um terminal, escreva git clone juntamente com o conteúdo copiado (como mostra na imagem abaixo);

<img src="/src/assets/chave-ssh.png">

<img src="/src/assets/terminal.png">

-Para abrir o projeto no vscode, abra o terminal no local aonde foi clonado o projeto e escreva:

```bash
code .
```

- Depois insira o seguinte comando no terminal ao iniciar o projeto para instalar todas as dependências necessárias:

1. Instale todas as dependências:

```bash
npm run install
```

2. Rode a aplicação:

```bash
npm run dev
```
