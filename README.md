# JOVIX — Sprint 3 | Web Development

## Sobre o projeto

O JOVIX é uma solução desenvolvida pelo grupo LAB-404 com o objetivo de auxiliar estudantes na organização e utilização de conteúdos acadêmicos.

O projeto foi inicialmente desenvolvido em HTML, CSS e JavaScript durante as Sprints anteriores. Nesta Sprint, o protótipo foi migrado para uma aplicação utilizando React e Vite, aplicando os conhecimentos de desenvolvimento de componentes, propriedades, estados, funções e organização de uma aplicação React.

A aplicação permite que o estudante informe seu nome, selecione uma matéria e responda questões relacionadas ao conteúdo. O sistema também utiliza o armazenamento local do navegador (localStorage) para manter informações como nome do usuário, matéria selecionada, pontuação e questões respondidas.

# Tecnologias utilizadas

> React

> Vite

> JavaScript

> HTML5

> CSS3

> React Router DOM

> LocalStorage

> Git

> GitHub

> Vercel

# Principais conceitos utilizados

Durante o desenvolvimento foram utilizados conceitos de:

> Componentização em React

> JSX

> Props

> useState

> useNavigate

> useParams

> React Router

> Funções JavaScript

> Arrays e objetos

> localStorage

> Organização de arquivos e pastas

> Reutilização de componentes

# Instalação

## Pré-requisitos

Para executar o projeto é necessário ter instalado:

> Node.js

> npm

> Git

Recomenda-se utilizar uma versão atualizada do Node.js.

# Instalando as dependências

Após baixar ou clonar o projeto, abra o terminal na pasta raiz do projeto e execute:

> npm install

Esse comando instala todas as dependências necessárias definidas no arquivo package.json.

Caso o React Router DOM ainda não esteja instalado, execute:

> npm install react-router-dom

# Como executar o projeto

Após instalar as dependências, execute:

> npm run dev

O Vite iniciará um servidor local.

No terminal será apresentado um endereço semelhante a:

> http://localhost:5173/

Abra esse endereço no navegador para acessar a aplicação.

# Estrutura do projeto

```javascript
src/
│
├── assets/
│   └── iajovix.png
│
├── components/
│   ├── Question.jsx
│   └── SubjectButton.jsx
│
├── data/
│   └── questoes.js
│
├── pages/
│   ├── Home.jsx
│   ├── Materias.jsx
│   └── Questoes.jsx
│
├── styles/
│   ├── global.css
│   ├── home.css
│   ├── materias.css
│   └── questoes.css
│
├── App.jsx
└── main.jsx


components
```
A pasta components contém os componentes reutilizáveis da aplicação.

O componente SubjectButton.jsx é utilizado para representar os botões de seleção das matérias. Por meio de Props, o mesmo componente pode receber diferentes nomes, matérias e classes CSS.

O componente Question.jsx é responsável pela estrutura das questões. Ele também recebe informações por meio de Props, como a pergunta, alternativas, resposta correta e explicação.

Dessa forma, a mesma estrutura de componente pode ser reutilizada para diferentes matérias e questões.

## pages

A pasta pages contém as principais telas da aplicação:

> Home.jsx — tela inicial, onde o estudante informa seu nome.

> Materias.jsx — tela de seleção das matérias.

> Questoes.jsx — tela responsável por apresentar as questões de acordo com a matéria selecionada.

## data

A pasta data contém os dados utilizados pela aplicação.

O arquivo questoes.js armazena as informações das questões, como matéria, pergunta, alternativas, resposta correta, explicação e identificador da questão.

## styles

A pasta styles contém os arquivos CSS utilizados para estilizar as diferentes páginas e componentes da aplicação.

# Funcionalidades

## Identificação do estudante

Na tela inicial, o estudante informa seu nome para acessar a aplicação.

O sistema verifica se o campo foi preenchido antes de permitir a entrada.

O nome informado é armazenado no localStorage utilizando a chave:

> nomeUsuario

Dessa maneira, o nome pode ser recuperado durante a navegação entre as diferentes páginas da aplicação.

Seleção de matérias

Após entrar na aplicação, o estudante pode selecionar uma das matérias disponíveis:

> Matemática

> História

> Geografia

Ao selecionar uma matéria, o sistema armazena essa informação e direciona o estudante para a página correspondente às questões.

A matéria selecionada é armazenada utilizando:

> materiaSelecionada

# Questões

Após selecionar uma matéria, o estudante recebe uma questão com diferentes alternativas.

A estrutura das questões é criada por meio do componente reutilizável Question.jsx.

A aplicação utiliza Props para enviar ao componente informações como:

> id
> materia
> pergunta
> opcoes
> correta
> explicacao

Isso permite utilizar o mesmo componente para diferentes questões e matérias.

# Verificação das respostas

Ao selecionar uma alternativa, o sistema verifica se a resposta escolhida corresponde à resposta correta.

Caso esteja incorreta, o estudante recebe uma mensagem informando que deve tentar novamente.

Caso esteja correta:

A questão é registrada como respondida.

A pontuação do estudante é atualizada.

O estudante recebe uma mensagem de confirmação.

O sistema retorna para a tela de matérias.


# LocalStorage

O projeto utiliza o localStorage do navegador para armazenar informações relacionadas ao estudante.

As principais chaves utilizadas são:

> nomeUsuario

O localStorage foi utilizado como uma solução de armazenamento local adequada ao protótipo atual, não sendo necessário utilizar um banco de dados externo para as funcionalidades implementadas nesta Sprint.

# Componentização e Props

Uma das principais mudanças realizadas nesta Sprint foi a transformação da estrutura anterior baseada em múltiplos arquivos HTML em uma aplicação baseada em componentes React.

Anteriormente, cada matéria possuía sua própria página HTML para apresentar as questões.

Na versão React, foi criado um componente reutilizável chamado Question.jsx.

Esse componente recebe diferentes informações por meio de Props.

Exemplo:

<Question
    id={questao.id}
    materia={questao.materia}
    pergunta={questao.pergunta}
    opcoes={questao.opcoes}
    correta={questao.correta}
    explicacao={questao.explicacao}
/>

Também foi criado o componente SubjectButton.jsx, que recebe informações por Props:

<SubjectButton
    nome="Matemática"
    materia="matematica"
    className="matematica"
/>

Dessa maneira, o mesmo componente pode ser utilizado para Matemática, História e Geografia, evitando a necessidade de criar um componente diferente para cada matéria.

# Rotas

A aplicação utiliza o React Router DOM para controlar a navegação entre as páginas.

As principais rotas são:

```javascript
/                         → Página inicial
/materias                 → Seleção de matérias
/questoes/matematica      → Questões de Matemática
/questoes/historia        → Questões de História
/questoes/geografia       → Questões de Geografia

```
O uso de rotas permite que a aplicação funcione como uma aplicação React de página única, sem a necessidade de criar diversos arquivos HTML independentes.

# Autenticação

O projeto não possui um sistema de autenticação com usuário e senha.

O estudante é identificado apenas pelo nome informado na tela inicial.

Portanto, não existem usuários ou senhas necessários para testar a aplicação.

# Utilização de Inteligência Artificial

> A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto. Como o grupo está em processo de aprendizagem de React e Vite, a IA foi utilizada principalmente para auxiliar na compreensão e aplicação de conceitos relacionados à adaptação do protótipo anterior, desenvolvido em HTML, CSS e JavaScript, para uma estrutura baseada em React. A IA também auxiliou na organização dos componentes, utilização de Props, estados, rotas, localStorage, identificação e correção de erros e estruturação dos arquivos. O código foi analisado, adaptado e testado pelo grupo de acordo com os conhecimentos adquiridos durante as aulas, utilizando a IA como recurso de apoio ao aprendizado e desenvolvimento.

# Deploy

O projeto foi publicado utilizando a plataforma Vercel.

Link do Deploy:

> https://sprint3-web-development-omega.vercel.app/

# Repositório

O código-fonte do projeto está disponível no GitHub:

> https://github.com/LAB-404-1ESPI/SPRINT3-Web-Development

# Equipe

Projeto desenvolvido pelo grupo LAB-404 para a disciplina de Web Development da FIAP.

Os nomes completos e RMs dos integrantes estão disponíveis no arquivo:

> INTEGRANTES.TXT

# Evolução do projeto

O JOVIX foi desenvolvido de forma incremental durante as Sprints.

Nas Sprints anteriores, o protótipo foi construído utilizando HTML, CSS e JavaScript, com páginas independentes para cada parte da aplicação.

Nesta Sprint, o projeto foi adaptado para React utilizando Vite.

A migração permitiu aplicar conceitos aprendidos durante as aulas, como:

> Componentes

> JSX

> Props

> Funções

> Rotas

> Organização modular do código

A estrutura foi desenvolvida de forma gradual, acompanhando os conhecimentos de React apresentados durante as aulas.

# Observações

Esta versão representa a evolução do protótipo desenvolvido nas Sprints anteriores.

A principal alteração desta Sprint foi a adaptação da aplicação para React utilizando Vite, passando de uma estrutura baseada em múltiplos arquivos HTML independentes para uma aplicação baseada em componentes, Props e rotas.

O projeto foi desenvolvido com foco na aplicação prática dos conceitos apresentados na disciplina de Web Development.