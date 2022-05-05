# Exercício

## Parte I - Criação de arquivos e diretórios
**Dica**: Para criação de arquivos vazios você pode utilizar o comando `touch nome-do-arquivo.extensao`.

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado `unix_tests` e navegue até ele.  
~~~shell 
$ mkdir unix_tests
$ cd unix_tests
~~~

2. Crie um arquivo de texto com o nome `trybe.txt`.
~~~shell 
$ touch trybe.txt
~~~   
   
3. Crie uma cópia do arquivo `trybe.txt` com nome `trybe_backup.txt`.
~~~shell 
$ cp trybe.txt trybe_backup.txt
~~~  
   
4. Renomeie o arquivo `trybe.txt`.
~~~shell 
$ mv trybe.txt trybe_renomeado.txt
~~~  

5. Dentro de `unix_tests`, crie um novo diretório chamado `backup`.
~~~shell 
$ mkdir backup
~~~  

6. Mova o arquivo `trybe_backup.txt` para o diretório `backup`.
~~~shell 
$ mv trybe_backup.txt backup/
~~~  

7. Dentro de `unix_tests`, crie um novo diretório chamado `backup2`.
~~~shell 
$ mkdir backup2
~~~  

8. Mova o arquivo `trybe_backup.txt` da pasta `backup` para a pasta `backup2`.
~~~shell 
$ mv backup/trybe_backup.txt backup2/
~~~  

9.  Apague a pasta `backup`.
~~~shell 
$ rmdir backup/
~~~  

10. Renomeie a pasta `backup2` para `backup`.
~~~shell 
$ mv backup2/ backup/
~~~  

11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
~~~shell 
$ pwd
$ ls *
~~~ 

12. Apague o diretório `backup`.
~~~shell 
$ rm -rf backup/
~~~ 

13. Limpe o terminal.
~~~shell 
$ clear
~~~ 

**Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt:**

```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

14.  Mostre na tela as 5 primeiras skills do arquivo `skills.txt`.
~~~shell 
$ head -5 skills.txt
~~~ 

15.  Mostre na tela as 4 últimas skills do arquivo `skills.txt`.
~~~shell 
$ tail -4 skills.txt
~~~ 

16.  Apague todos os arquivos que terminem em `.txt`.
~~~shell 
$ rm *.txt
~~~ 

## Parte II - Manipulação & Busca
1. Na pasta `unix_tests`, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando `curl`:
  ~~~shell 
  curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
  ~~~
2. Mostre todo o conteúdo do arquivo `countries.txt` na tela.
~~~shell
$ cat countries.txt
~~~

3. Mostre o conteúdo de `countries.txt`, página por página, até encontrar a `Zambia`.
~~~shell
$ less countries.txt
~~~

4. Mostre novamente o conteúdo de `countries.txt` página por página, mas agora utilize um comando para buscar por `Zambia`.
~~~shell
$ less countries.txt
/Zambia
~~~

5. Busque por `Brazil` no `countries.txt`.
~~~shell
$ grep Brazil countries.txt
~~~

6. Busque novamente por `brazil`, mas agora utilizando o lower case.
~~~shell
$ grep -i brazil countries.txt
~~~

**Para os próximos exercícios, crie um novo arquivo chamado `phrases.txt` e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.**

7. Busque pelas frases que não contenham a palavra `fox`.
~~~shell
$ grep -v fox phrases.txt
~~~

8. Conte o número de palavras do arquivo `phrases.txt`.
~~~shell
$ wc -w phrases.txt
~~~

9. Conte o número de linhas do arquivo `phrases.txt`.
~~~shell
$ wc -l phrases.txt
~~~

10. Crie os arquivos `empty.tbt` e `empty.pdf`.
~~~shell
$ touch empty.tbt
$ touch empty.pdf
~~~

11. Liste todos os arquivos do diretório `unix_tests`.
~~~shell
$ ls 
~~~

12. Liste todos os arquivos que terminem com `txt`.
~~~shell
$ ls *.txt
~~~

13. Liste todos os arquivos que terminem com `tbt` ou `txt`.
~~~shell
$ ls *.tbt *.txt
~~~

14. Acesse o manual do comando `ls`.
~~~shell
$ man ls
~~~
