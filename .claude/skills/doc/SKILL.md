---
name: doc
description: Documenta o ultimo commit como uma aula didatica (nota em Markdown) com analogias e codigo real comentado. Use quando o usuario disser /doc ou "Documentar ultimo commit".
disable-model-invocation: true
allowed-tools: Bash(git log:*), Bash(git show:*), Bash(git diff:*), Read, Glob, Grep, Write
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
   - Se o commit tocar nos dois, gere uma nota em cada pasta.
3. Leia os arquivos alterados (versao atual) para entender o contexto alem do diff.
4. Crie a nota didatica em Markdown, nomeada `AAAA-MM-DD - <resumo do commit>.md`, com:
   - **Objetivo**: o que o commit entrega e por que.
   - **Analogia**: explique o conceito principal com uma analogia do dia a dia.
   - **Codigo real comentado**: trechos do commit, com comentarios em portugues explicando cada parte.
   - **Conceitos-chave**: lista curta dos termos aprendidos (ex.: hooks, props, Intl).
   - **Resumo / Para revisar**: 3 a 5 pontos para fixar.
5. Se a pasta de destino nao existir, crie-a.

## Regras

- **Nunca altere arquivos de codigo.** Escreva apenas a nota de estudo.
- Use apenas codigo que existe de fato no commit; nao invente trechos.
- Escreva em portugues, em tom de aula para quem esta aprendendo.
