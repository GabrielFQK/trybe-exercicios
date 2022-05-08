## Unix & Shell - Part 2

### Fui capaz de:

- Utilizar o comando `find`;
- Utilizar os operadores `>` (maior), `>>` (maior maior) e `|` (pipe) no terminal;
- Alterar as permissões de arquivos e diretórios;
- Verificar o status e enviar sinais a processos UNIX;

### Exercício:

#### Parte I - Comandos de Input e Output

1. Navegue até a pasta `unix_tests`;
~~~shell
  $ cd unix_tests
~~~
   
2. Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet`, `Unix` e `Bash`, um em cada linha.

~~~shell
$ cat > skills2.txt
Internet
Unix
Bash
~~~
   
3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
~~~shell
$ cat >> skills2.txt
Git
GitHub
HTML
CSS
JavaScript
$ sort skills2.txt
~~~

4. Conte quantas linhas tem o arquivo `skills2.txt`.
~~~shell
$ wc -l skills2.txt
~~~   
   
5. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`, contendo as 3 primeiras skills em ordem alfabética.
~~~shell
$ head -3 skills2.txt | sort | cat > top_skills.txt
~~~
      
6. Crie um novo arquivo chamado `phrases2.txt` pelo terminal e adicione algumas frases de sua escolha.
~~~shell
$ cat > phrases2.txt
~~~   
   
7. Conte o número de linhas que contêm as letras `br`.
~~~shell
$ grep br skills2.txt | wc -l
~~~  
   
8. Conte o número de linhas que **não** contêm as letras `br`.
~~~shell
$ grep -v br skills2.txt | wc -l
~~~

9.  Adicione dois nomes de países ao final do arquivo `phrases2.txt`.
~~~shell
$ cat >> phrases2.txt
Brasil
Alemanha
~~~
    
10. Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt`
~~~shell
$ cat phrases2.txt countries.txt > bunch_of_things.txt 
~~~
    
11.  Ordene o arquivo `bunch_of_things.txt`.
~~~shell
$ sort bunch_of_things.txt 
~~~

#### Parte II - Permissões

1. Navegue até a pasta `unix_tests`;
~~~shell
$ cd unix_tests 
~~~  
   
2. Rode o comando `ls -l` e veja quais as permissões dos arquivos;
~~~shell
$ ls -l 
~~~
   
3. Mude a permissão do arquivo `bunch_of_things.txt` para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando `ls -l`;
> Resultado esperado: `-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
~~~shell
$ chmod a+rw bunch_of_things.txt
$ ls -l
~~~

4. Tire a permissão de escrita do arquivo `bunch_of_things.txt` para todos os usuários, verifique se está correto com o comando `ls -l`;
> Resultado esperado: `-r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
~~~shell
$ chmod a-w bunch_of_things.txt 
~~~

5. Volte à permissão do arquivo `bunch_of_things.txt` para a listada inicialmente utilizando o comando `chmod 644 bunch_of_things.txt`.
> Resultado esperado: `-rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
~~~shell
$ chmod 644 bunch_of_things.txt 
~~~

#### Parte III - Processos & Jobs

1. Liste todos os processos;
~~~shell
$ ps
~~~

2. Agora use o comando `sleep 30 &`;
~~~shell
$ sleep 30 &
~~~

3. Use a listagem de processos para encontrar o PID do processo que está executando o comando `sleep 30` e termine a sua execução (~~mate o processo~~);
~~~shell
$ ps
$ kill 28481
~~~

4. Execute novamente o comando `sleep 30`, mas agora sem o `&`. Depois, faça com que ele continue executando em background;
~~~shell
$ sleep 30
^Z
~~~

5. Crie um processo em background que rode o comando `sleep` por 300 segundos.
~~~shell
$ sleep 300 &
~~~

6. Crie mais dois processos que rodem o comando `sleep` por 200 e 100 segundos, respectivamente.
> Você deve criá-los em foreground (sem usar o `&`) e suspendê-los (apertando `ctrl+z`) após cada um começar a executar.
~~~shell
$ sleep 200
^Z
$ sleep 100
^Z
~~~

7. Verifique que apenas o processo `sleep 300` está em execução com o comando `jobs`. Suspenda a execução desse processo.
> Você vai precisar trazer o processo para foreground (`fg`) e suspendê-lo (`ctrl+z`), ou enviar um sinal.
~~~shell
$ jobs
fg %3
^Z
~~~

8.  Retome a execução do processo `sleep 100` em background com o comando `bg`.
~~~shell
$ jobs
$ bg %4
~~~

9.  Termine a execução de todos os processos `sleep` (~~mate os processos~~).
~~~shell
$ killall sleep
~~~




  
