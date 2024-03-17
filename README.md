![image](https://github.com/filipelimavaz/projeto-ayty-briefing/assets/42976390/db88eb3e-aa43-43e5-be89-0d2efac9515c)# Tutorial de Instalação

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
2. Selecione a primeira opção pois não vamos utilizar todos os recursos do MYSQL. 

![Instalação MYSQL](.github/mysql-install/InstalacaoMYSQL-0.png)

3. Após selecionar a opção de download. Você será levado para uma tela onde será perguntado se você quer fazer login antes continuar, mas não há necessidade. Clique em "No thanks, just start my download."

4. Após o download. Clique no arquivo de instalação e você será levado a essa tela. Clique em custom

![Instalação MYSQL](.github/mysql-install/InstalacaoMYSQL-1.png)

6. Após clicar em "custom". Você será levado para essa tela. Nela iremos selecionar apenas as ferramentas que utilizaremos para executar o projeto. Sendo assim, Siga o passo a passo:

![Instalação MYSQL](.github/mysql-install/InstalacaoMYSQL-2.png)

```bash
   1. Clicar em MySQL Server.
   2. MySQL Server 8.0.
   3. Selecione a primeira opção.
   4. Clicar na seta verde
```
```bash
   1. Clicar em Applications.
   2. Mysql Workbench.
   3. Mysql Workbench 8.0.
   4. Selecione a primeira opcao.
   5. Clicar na seta verde
```
7. Feito o passo a passo. Sua tela ficará assim. Basta clicar em next.

![Instalação MYSQL](.github/mysql-install/InstalacaoMYSQL-3.png)

8. Após esse passo é só clicar em next até chegar na imagem do passo 9.

![Instalação MYSQL](.github/mysql-install/InstalacaoMYSQL-4.png)

9. Nesta parte não precisamos fazer nada. Apenas verificar se a porta alocada para o banco é a 3306. Pode clicar em next.

![Instalação MYSQL](.github/mysql-install/InstalacaoMYSQL-5.png)

10. Essa parte é de extrema importância. Clique na segunda opção "Use Legacy Authentication" para não termos problemas de autenticação mais a frente.

![Instalação MYSQL](.github/mysql-install/InstalacaoMYSQL-6.png)

11. Aqui iremos selecionar uma senha para acessar o banco. Digite a senha **root** pois será a que irá ser utilizada pelo código para acessar o banco.

![Instalação MYSQL](.github/mysql-install/InstalacaoMYSQL-7.png)

12. Nesta parte, se você não quiser que o Mysql inicie toda vez que você ligar o computador, desmarque a opção "Start the MySQL at System Startup". Após isso, basta clicar em next até finalizar a instalação.

![Instalação MYSQL](.github/mysql-install/InstalacaoMYSQL-8.png)

## Passo 3: Inicializando o MySQL Workbench

1. Após a instalação do MySQL Workbench. Você irá se deparar com a seguinte tela. Clique 
