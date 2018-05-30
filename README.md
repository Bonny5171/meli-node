# Meli

## Introdução

Essas instruções fornecerão:
- Uma cópia do projeto em funcionamento em sua máquina local;

### Prerequisitos

* [Node > 8.2.1](https://nodejs.org/en/)

### Instalação

1 - Criar uma cópia do repositório:

```
git clone git@github.com:Bonny5171/meli-node.git
```

2 - Criar arquivo .env na raiz do projeto com as seguintes variáveis.

```
# Node Env (development)
NODE_ENV=development

# Port (Express port)
PORT=3000

# Local API URL
API_URL=//localhost:3000

# Mercado Livre API URL
MELI_API_URL=https://api.mercadolibre.com
```

3 - Instalar dependencias

```
npm i
```

## Execução

Executar o seguinte comando no diretório raiz da aplicação:

```
npm run serve
```

A aplicação irá responder na seguinte URL:

```
http://localhost:3000
```

App desenvolvido por @iBonny - https://github.com/Bonny5171