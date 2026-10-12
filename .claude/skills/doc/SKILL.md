---
name: doc
description: Documenta o ultimo commit como uma aula didatica (nota em Markdown) com analogias e codigo real comentado. Avisa se e preciso criar uma aula nova ou editar uma existente. Use quando o usuario disser /doc ou "Documentar ultimo commit".
disable-model-invocation: true
allowed-tools: Bash(git log:*), Bash(git show:*), Bash(git diff:*), Read, Glob, Grep, Write, Edit
---

# Documentar ultimo commit como aula

## Passos

1. Identifique o ultimo commit e seus arquivos:
   - `git log -1 --format="%h %s"`
   - `git show --stat --format="" HEAD`
   - `git show HEAD` para ler o diff completo.
2. Defina a pasta de destino pelo caminho dos arquivos alterados:
   - `dev-burger-api/` -> `C:/Users/bruno.souza/Desktop/Docs Pessoais/FullStack/DevClub/Estudos-Fullstack/01 - Backend/`
   - `dev-burger-front/` -> `C:/Users/bruno.souza/Desktop/Docs Pessoais/FullStack/DevClub/Estudos-Fullstack/02 - Frontend/`
   - Deploy/infraestrutura (Vercel, Supabase, Atlas, variaveis de ambiente) -> `.../Estudos-Fullstack/03 - Deploy/`
   - Se o commit tocar em mais de uma area, avalie cada pasta separadamente.
3. Leia os arquivos alterados (versao atual) para entender o contexto alem do diff.
4. **Avalie e AVISE o usuario antes de escrever** (esta etapa e obrigatoria):
   - Liste as aulas existentes na pasta de destino (`Glob` em `Aula *.md`) e leia as mais recentes/relacionadas.
   - Decida e informe, em uma frase por pasta, qual dos casos se aplica:
     - **Criar aula nova**: o commit traz um assunto novo, OU altera codigo de uma aula antiga e essa alteracao **depende de algo de aulas mais recentes** (ex.: usa um contexto, middleware, model ou rota criado depois dela) -> "Recomendo criar a Aula NN - <titulo>, pois depende da Aula X".
     - **Editar aula existente**: o commit altera codigo de uma aula antiga e a alteracao **nao depende de nada de aulas mais recentes** (faz sentido sozinha naquele ponto da sequencia) -> "Recomendo editar a Aula NN - <titulo>, pois <motivo>".
     - **Nenhuma aula necessaria**: mudanca trivial (formatacao, config menor) -> diga isso e justifique.
   - Para decidir a dependencia, compare os arquivos/conceitos usados no commit com o que cada aula posterior introduziu.
   - Se a decisao nao for obvia, pergunte ao usuario antes de gravar.
5. Escreva a nota:
   - **Aula nova**: nome `Aula NN - <titulo>.md`, onde `NN` e o proximo numero da sequencia daquela pasta (maior numero existente + 1, com dois digitos). Cada pasta tem sua propria numeracao.
   - **Aula existente**: use `Edit` para reescrever a secao pertinente, **substituindo o conteudo antigo** (pode excluir o passado; a aula deve refletir o codigo atual, sem blocos de "atualizacao" ou historico).
   - Estrutura da aula:
     - **Objetivo**: o que o commit entrega e por que.
     - **Analogia**: explique o conceito principal com uma analogia do dia a dia.
     - **Codigo real comentado**: trechos do commit, com comentarios em portugues explicando cada parte.
     - **Conceitos-chave**: lista curta dos termos aprendidos (ex.: hooks, props, Intl).
     - **Resumo / Para revisar**: 3 a 5 pontos para fixar.
   - Antes de seguir o estilo, abra uma aula recente da mesma pasta e imite o formato.
6. Se a pasta de destino nao existir, crie-a.
7. Ao final, informe quais arquivos foram criados/editados e o numero das aulas.

## Regras

- **Nunca altere arquivos de codigo.** Escreva apenas notas de estudo.
- O nome do arquivo SEMPRE comeca com `Aula NN - ` (nunca use data no nome).
- Nunca pule nem repita numeros: confira a lista da pasta antes de nomear.
- Sempre avise se a aula deve ser nova ou edicao de uma existente (passo 4).
- Use apenas codigo que existe de fato no commit; nao invente trechos.
- Escreva em portugues, em tom de aula para quem esta aprendendo.
