# BrainAG - Desafio Técnico Desenvolvedor Node.js Sênior
API para cadastro de produtores e propriedades rurais.

## Instalação
Clone o repositório

```shell
git clone https://github.com/alef-carvalho/desafio-tecnico-brain-ag-backend.git
```

Faça uma cópia do arquivo de configuração:

```shell
cd desafio-tecnico-brain-ag-backend/  && cp .env.example .env
```

Execute o projeto utilizando o Docker Compose:

```shell
docker-compose up -d
```

## Configuração
Execute as migrações:
```shell
docker exec -it brain_ag_api node ace migration:run
```

Execute os seeders
```shell
docker exec -it brain_ag_api node ace db:seed
```

A aplicação estará disponível no endereço: http://127.0.0.1:3000

## Executando os Testes
O projeto conta com alguns testes de exemplo, o comando abaixo executa a suite e exibe o relatório de execução:
```shell
node ace test
```

## Tecnologias Utilizadas
- **Node.js** (20.6)
- **Adonis.js** (6.12) (conforme requisitos da vaga)
- **PostgreSQL** (15.3)

## Documentação da API
A documentação da API (swagger) pode ser encontrada em: **[http://127.0.0.1:3000/docs](http://127.0.0.1:3000/docs)**
![Alt text](https://raw.githubusercontent.com/alef-carvalho/desafio-tecnico-brain-ag-backend/development/examples/swagger.jpeg)
