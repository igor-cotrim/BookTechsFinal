
# Tech Books - Moveis 2023.1

Este aplicativo é uma ferramenta útil para desenvolvedores em busca de novos livros sobre programação e tecnologia. Com uma ampla seleção de títulos, o aplicativo ajuda a simplificar o processo de escolha da próxima leitura, facilitando a busca e a comparação de opções. No geral, o aplicativo é uma valiosa fonte de informação para quem quer se manter atualizado com as tendências e as melhores práticas em programação e tecnologia;

## Pré-requisitos

* Node.js
* Docker
* Expo CLI (```npm install -g expo-cli``` ou ```npx install -g expo-cli```)
* Outras dependências do projeto

## Instalação

1. Clone o repositório do projeto:
```bash
  git clone https://github.com/igor-cotrim/tech-books-final.git
```

2. Instale as dependências do Front-end (client):
```bash
  cd nome-do-projeto
  cd client
  npm install
```

3. Instale as dependências do Back-end (server):
```bash
  cd nome-do-projeto
  cd server
  npm install
```

## Configuração

1. No Front-end no crie o arquivo .env coloque o ip da sua maquina para conseguir pegar as rotas. O .env tem que ficar assim, com o seu IP:
```bash
API_URL_BOOKS=http://192.168.0.10:3000
API_URL_REVIWS=http://192.168.0.10:3001
```

## Iniciar

1. Rode o docker para criar a imagem e levantar o container com os serviços:
```bash
  cd server
  docker-compose up --build
```

2. Inicie o projeto frontend:
```bash
  cd client
  npm start
```

3. Abra o aplicativo Expo em seu dispositivo móvel ou em um emulador.

4. Escaneie o código QR gerado no terminal ou na página aberta em seu navegador.

5. Aguarde a instalação do aplicativo e aproveite!

## Testes

1. Com o serviços do backend rodando no Docker, va para o diretorio /server e rode o comando para testes
```bash
  cd server
  npm run test
```

## Dicas

1. Para descobrir o endereço IP da máquina, você pode executar o comando ipconfig no Windows ou ifconfig no Linux/Mac no terminal da máquina onde o servidor está sendo executado.

2. Apos iniciar o projeto, clique w para abrir na web, a para abrir no emulador ou leia o QR code para abrir no celular

3. Para abrir no proprio celular, baixe o aplicativo [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US&pli=1)