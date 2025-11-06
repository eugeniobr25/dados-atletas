## Projeto de certificação 2 - DEVstart CE - Dados dos atletas

# 🏆 dados-atletas: Cálculo de Parâmetros de Atletas

## 📝 Resumo

Este projeto, desenvolvido em JavaScript, utiliza a Orientação a Objetos (POO) com a classe Atleta para consolidar e processar informações de um competidor. O software calcula e exibe diversos parâmetros importantes, como a categoria do atleta, seu Índice de Massa Corporal (IMC) e a média válida das suas notas em competições.

## ✨ Como o Código Funciona

O script dados-atletas.js utiliza a classe Atleta para encapsular atributos e métodos de cálculo:

1. *Atributos: A classe armazena nome, idade, peso, altura e notas.

2. calculaCategoria(): Classifica o atleta em categorias como Infantil, Juvenil, Intermediário, Adulto ou Sem Categoria, com base em sua idade.

3. calculaIMC(): Calcula o IMC do atleta usando a fórmula padrão: IMC = peso / (altura * altura).

4. calculaMediaValida(): Calcula a média das notas, descartando a nota mais alta e a mais baixa (se houver pelo menos três notas), garantindo uma avaliação justa.

5. Saída: O código de teste exibe todos os dados do atleta, incluindo Nome, Idade, Peso, Altura, as Notas originais e os parâmetros calculados (Categoria, IMC e Média Válida).

## 📥 Como Baixar e Configurar para Teste Local

Siga estas instruções para obter o código e prepará-lo para execução na sua máquina.

### Opção 1: Clonar o Repositório (Recomendado)

Se você tem o Git instalado, esta é a forma mais rápida de obter o projeto.

1.  **Clonar:** Abra seu terminal e use o comando `git clone`:

    ```bash
    git clone https://github.com/eugeniobr25/dados-atletas.git
    ```

2.  **Resultado:** O comando criará automaticamente a pasta `dados-atletas` no local onde você o executou (por exemplo, dentro da sua Área de Trabalho).

### Opção 2: Download do ZIP

1.  **Baixar:** No GitHub, vá até a página do seu repositório. Clique no botão **Code** (Código) e escolha a opção **Download ZIP** (Baixar ZIP).

2.  **Extrair:**
    * Extraia o conteúdo do arquivo ZIP.
  

## 🚀 Como Executar

Para testar o código localmente, você precisa ter o **[Node.js](https://nodejs.org/pt)** instalado em sua máquina.

### 1. Navegue até o diretório onde o arquivo `dados-atletas.js` está salvo.

### 2. Abrir o Terminal/Prompt de Comando
  - No Windows (Recomendado):
    - Pressione a tecla Windows + R.
    - Digite cmd e pressione Enter. (Isso abrirá o Prompt de Comando).

  - No Mac/Linux:
    - Use o atalho Command + Espaço e digite "Terminal", ou encontre-o na pasta de Aplicativos.

Você precisa dizer ao seu computador onde encontrar o arquivo notas-atletas.js.

Comando de navegação:
```bash
cd "C:\Users\..."
```
(Substitua "..." pelo caminho ate o arquivo dados-atletas.js).

Ou, se estiver em Mac/Linux:
```bash
cd ~/...
```
(Substitua "..." pelo caminho ate o arquivo dados-atletas.js).


- Dica:
Se você usa Windows e o cmd te confunde
  - Abra o Explorador de Arquivos e navegue até a pasta dados-atletas.
  - Clique na barra de endereços no topo (onde mostra o caminho completo).
  - Apague o caminho e digite cmd. Aperte Enter. Isso abrirá o Prompt de Comando diretamente na pasta do seu projeto.


### 3. Execute o script no terminal usando o comando:

```bash
node dados-atletas.js
```
📋 Saída Esperada
O resultado será impresso no console com o nome do atleta, as cinco notas originais e a média calculada com o descarte da maior e menor nota, seguindo o padrão abaixo:

```bash
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9,25333333'
```
Desenvolvido por: [Eugenio Brilhante](https://github.com/eugeniobr25)
