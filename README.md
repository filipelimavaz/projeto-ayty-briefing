# Tutorial de Instalação

Este é um tutorial passo a passo para instalar os requisitos necessários para esta API.

## Passo 1: Instalar o GIT

GIT é um sistema de controle de versão amplamente utilizado para o gerenciamento de código-fonte.

### Windows

1. Baixe o [instalador do GIT para Windows](https://git-scm.com/download/win).
2. Execute o arquivo baixado e siga as instruções do instalador.
3. Após a instalação, verifique se o GIT foi instalado corretamente abrindo o prompt de comando e digitando o seguinte comando:

```bash
git --version
```

### macOS

1. GIT geralmente já vem pré-instalado no macOS. Se não estiver, você pode instalá-lo usando o Homebrew ou baixando o [instalador do GIT para macOS](https://git-scm.com/download/mac) do site oficial.
2. Siga as instruções do instalador para concluir a instalação.
3. Após a instalação, verifique se o GIT foi instalado corretamente abrindo o Terminal e digitando o seguinte comando:

```bash
git --version
```

### Linux (Debian/Ubuntu)

1. Abra o Terminal e execute:

```bash
sudo apt-get update
```
```bash
sudo apt-get install git
```

2. Após a instalação, verifique se o GIT foi instalado corretamente digitando o seguinte comando:

```bash
git --version
```

## Passo 2: Instalar o Node.js

Node.js é uma plataforma que permite que você execute JavaScript no servidor.

### Windows

1. Baixe o [instalador do Node.js para Windows](https://nodejs.org/en/download/).
2. Execute o arquivo baixado e siga as instruções do instalador.
3. Após a instalação, verifique se o Node.js foi instalado corretamente abrindo o prompt de comando e digitando os seguintes comandos:

```bash
node -v
```
```bash
npm -v
```

### macOS

1. Baixe o [instalador do Node.js para macOS](https://nodejs.org/en/download/).
2. Execute o arquivo baixado e siga as instruções do instalador.
3. Após a instalação, verifique se o Node.js foi instalado corretamente abrindo o Terminal e digitando os seguintes comandos:

```bash
node -v
```
```bash
npm -v
```

### Linux (Debian/Ubuntu)

1. Abra o Terminal e execute:

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```
```bash
sudo apt-get install -y nodejs
```

2. Após a instalação, verifique se o Node.js foi instalado corretamente digitando os seguintes comandos:

```bash
node -v
```
```bash
npm -v
```

## Passo 3: Instalar o MySQL

MySQL é um sistema de gerenciamento de banco de dados relacional amplamente utilizado.

### Windows

1. Baixe o [instalador do MySQL para Windows](https://dev.mysql.com/downloads/windows/installer/8.0.html).
   
3. Execute o arquivo baixado e siga as instruções do instalador.
4. Durante a instalação, você será solicitado a selecionar os componentes que deseja instalar. Certifique-se de selecionar "MySQL Server" e quaisquer outras ferramentas ou plugins que você deseje instalar.
5. Durante a configuração, você precisará definir uma senha para o usuário root do MySQL. Certifique-se de escolher uma senha forte e anote-a em um local seguro.
6. Conclua a instalação seguindo todas as instruções do instalador.
7. Após a instalação, você pode verificar se o MySQL Server foi instalado corretamente abrindo o prompt de comando e digitando o seguinte comando:

 ```bash
 mysql --version
```

### macOS

1. Baixe o [instalador do MySQL para macOS](https://dev.mysql.com/downloads/mysql/) do site oficial.
2. Execute o arquivo baixado e siga as instruções do instalador.
3. Durante a instalação, você será solicitado a selecionar os componentes que deseja instalar. Certifique-se de selecionar "MySQL Server" e quaisquer outras ferramentas ou plugins que você deseje instalar.
4. Durante a configuração, você precisará definir uma senha para o usuário root do MySQL. Certifique-se de escolher uma senha forte e anote-a em um local seguro.
5. Conclua a instalação seguindo todas as instruções do instalador.
6. Após a instalação, você pode verificar se o MySQL Server foi instalado corretamente abrindo o Terminal e digitando o seguinte comando:

```bash
mysql --version
```

### Linux (Debian/Ubuntu)

1. Abra o Terminal e execute os seguintes comandos para baixar e instalar o MySQL:

```bash
sudo apt-get update
```
```bash
sudo apt-get install mysql-server
```

1. Durante a instalação, você será solicitado a definir uma senha para o usuário root do MySQL. Certifique-se de escolher uma senha forte e anote-a em um local seguro.
2. Conclua a instalação seguindo todas as instruções do instalador.
3. Após a instalação, você pode verificar se o MySQL Server foi instalado corretamente digitando o seguinte comando no Terminal:

```bash
mysql --version
```
