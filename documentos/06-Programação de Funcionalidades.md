# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

## Tela de Cadastro

![Tela de Cadastro](https://media.discordapp.net/attachments/737069685333557319/1239294580998799451/Cadastro_tela_feito.png?ex=66426685&is=66411505&hm=d0516c900c0beb06a2362430372f5dea2d1d09776cf6b6b87432cd60a2e804f8&=&format=webp&quality=lossless&width=980&height=592)

#### Requisito atendido

[RNF-03]: A aplicação deve ser responsiva, funcionando de forma eficaz em dispositivos móveis e desktops.

[RNF-04]: A aplicação deve ter tempos de resposta rápidos para manter uma experiência fluida.

[RNF-05]: A solução deve ser desenvolvida utilizando tecnologias atuais e de fácil manutenção.

#### Artefatos da funcionalidade

- HTML: `index.html`
- CSS: `index.css`
- JS: `script.js`

#### Estrutura de Dados

A lista de usuários é armazenada no Local Storage como um array de objetos, onde cada objeto representa um usuário e contém os seguintes campos:

```json
[
  {
    "NM_User": "string",
    "TX_Password": "string"
  },
  {
    "NM_User": "string",
    "TX_Password": "string"
  },
  ...
]
```

#### Instruções de acesso

Para acessar a tela de cadastro, abra o arquivo `index.html` dentro de codigo-fonte/cadastro em um navegador web.

#### Responsável

Desenvolvimento da estrutura HTML e estilos CSS:
- Ryan Aragão

Implementação do formulário de cadastro:
- Claudius Suetonio de Abreu Domingues Junior

Validação e cadastro do usuário:
- Carine Nascimento Marques
