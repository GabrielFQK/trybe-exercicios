## Git & GitHub - Entendendo os comandos

### Fui capaz de:

- Copiar um repositório já existente no **GitHub** para o meu computador;
- Abrir _Pull Requests_;
- Trabalhar em um mesmo projeto, com mais de uma pessoa, de forma assíncrona e distribuída.

### Exercício

**⚠️ Para fazer os exercícios a seguir, você deve utilizar o projeto com o texto no arquivo `.txt`, localizado dentro do diretório do dia anterior, crie uma cópia para usar no dia de hoje.**

1. Navegue até a raiz do projeto com o arquivo .txt;
2. Verifique se não existe nada sem "commitar" utilizando `git status`:
   - Caso exista algo, verifique se é necessário e faça o commit, ou remova-o.
3. Crie uma nova `branch` com o nome `trybe-skills-changes` e faça `checkout` nela;
4. No arquivo `.txt`, ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:
   - Faça um `git add nome-do-arquivo.extensao`;
   - Você pode adicionar todos os arquivos que você modificou usando `git add .`, mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;
   - Agora um `git commit -m "Mensagem que você gostaria"`;
   - Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, `git commit -m "Adiciona nova skill"`;
   - Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu;
   - E por último um `git push -u origin trybe-skills-changes`;
5. Abra um Pull Request com uma descrição detalhada:
   - O merge deve ser feito apenas quando chegar no exercício 10.
6. Retorne para a branch principal, master, com o comando: git checkout master;
7. Verifique que você está na branch master, com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);
8. Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;
9.  No mesmo arquivo .txt que você modificou no passo 4, também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:
    - Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;
    - Faça um `git add nome-do-arquivo.extensao`;
    - Agora um `git commit -m "Mensagem que você gostaria"`;
    - e por último um `git push -u origin trybe-skills-updates`;
    - Após o primeiro "push" da sua branch, você pode usar apenas o comando `git push`;
10. Agora, faça o `merge` das branches `trybe-skills-changes` e `trybe-skills-updates` na `branch master`, através do _Pull Request_: