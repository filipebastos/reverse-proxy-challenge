# reverse-proxy-challenge

## Diretórios 

### `mysql`
- O diretório `storage` armazena os arquivos do banco de dados
- O arquivo `init.sql` é o script inicial para criação do bando de dados `nodedb` e da tabela `people`

### `nginx`
- Arquivo `nginx.conf` com configuração do proxy reverso

### `nodejs`
- Aplicação NodeJS com conexão ao banco de dados
___

## Como testar

### Subir os containers
```
docker-compose up -d
```

### Testar a URL abaixo
```
http://localhost:8080
```